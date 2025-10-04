import React, { useState } from "react";
import Navbar from "./Navbar";
import "./UploadData.css";

// Icon components
const UploadCloudIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m16 16-4-4-4 4" />
  </svg>
);

const FileIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

const XCircleIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const UploadData = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const acceptedFormats = ["CSV", "XLSX", "XLS", "JSON", "XML"];

  const getFileType = (filename) => {
    const ext = filename.split(".").pop().toUpperCase();
    return ext;
  };

  const getFileColor = (type) => {
    const colors = {
      CSV: "#10b981",
      XLSX: "#3b82f6",
      XLS: "#3b82f6",
      JSON: "#8b5cf6",
      XML: "#f59e0b",
    };
    return colors[type] || "#64748b";
  };

  const validateFile = (file) => {
    const fileType = getFileType(file.name);
    const maxSize = 50 * 1024 * 1024; // 50MB

    if (!acceptedFormats.includes(fileType)) {
      return { valid: false, error: "Unsupported file format" };
    }
    if (file.size > maxSize) {
      return { valid: false, error: "File too large (max 50MB)" };
    }
    return { valid: true };
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    addFiles(selectedFiles);
  };

  const addFiles = (newFiles) => {
    const processedFiles = newFiles.map((file) => {
      const validation = validateFile(file);
      return {
        id: Math.random().toString(36).substr(2, 9),
        file: file,
        name: file.name,
        size: (file.size / 1024).toFixed(2) + " KB",
        type: getFileType(file.name),
        status: validation.valid ? "pending" : "error",
        error: validation.error,
        progress: 0,
      };
    });

    setFiles((prev) => [...prev, ...processedFiles]);
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const simulateUpload = (fileId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setFiles((prev) =>
          prev.map((f) =>
            f.id === fileId ? { ...f, status: "success", progress: 100 } : f
          )
        );
      } else {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === fileId ? { ...f, progress: Math.floor(progress) } : f
          )
        );
      }
    }, 300);
  };

  const handleUploadAll = () => {
    const pendingFiles = files.filter((f) => f.status === "pending");
    pendingFiles.forEach((file) => {
      setFiles((prev) =>
        prev.map((f) => (f.id === file.id ? { ...f, status: "uploading" } : f))
      );
      simulateUpload(file.id);
    });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <CheckCircleIcon />;
      case "error":
        return <XCircleIcon />;
      case "uploading":
        return <div className="spinner"></div>;
      default:
        return <FileIcon />;
    }
  };

  const pendingCount = files.filter((f) => f.status === "pending").length;
  const successCount = files.filter((f) => f.status === "success").length;
  const errorCount = files.filter((f) => f.status === "error").length;

  return (
    <div className="upload-page">
      <Navbar activePage="upload" />

      <div className="upload-container">
        {/* Header */}
        <div className="upload-header">
          <div className="header-content">
            <h1>Upload Financial Data</h1>
            <p>
              Upload your financial data files to begin the transformation
              process. We support multiple formats including CSV, Excel, JSON,
              and XML.
            </p>
          </div>
          <div className="header-stats">
            <div className="stat-badge">
              <span className="stat-number">{files.length}</span>
              <span className="stat-label">Total Files</span>
            </div>
            <div className="stat-badge success">
              <span className="stat-number">{successCount}</span>
              <span className="stat-label">Uploaded</span>
            </div>
            {errorCount > 0 && (
              <div className="stat-badge error">
                <span className="stat-number">{errorCount}</span>
                <span className="stat-label">Errors</span>
              </div>
            )}
          </div>
        </div>

        {/* Upload Zone */}
        <div
          className={`upload-zone ${isDragging ? "dragging" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <UploadCloudIcon />
          <h3>Drag & Drop Files Here</h3>
          <p>or click to browse from your computer</p>
          <input
            type="file"
            id="file-input"
            multiple
            onChange={handleFileInput}
            accept=".csv,.xlsx,.xls,.json,.xml"
            style={{ display: "none" }}
          />
          <label htmlFor="file-input" className="btn primary">
            Select Files
          </label>
          <div className="accepted-formats">
            <span>Accepted formats:</span>
            {acceptedFormats.map((format) => (
              <span key={format} className="format-badge">
                {format}
              </span>
            ))}
          </div>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="files-section">
            <div className="files-header">
              <h2>Uploaded Files ({files.length})</h2>
              {pendingCount > 0 && (
                <button className="btn primary" onClick={handleUploadAll}>
                  <span>Upload All ({pendingCount})</span>
                  <ArrowRightIcon />
                </button>
              )}
            </div>

            <div className="files-list">
              {files.map((file) => (
                <div key={file.id} className={`file-item ${file.status}`}>
                  <div className="file-info">
                    <div
                      className="file-icon-wrapper"
                      style={{
                        background: `${getFileColor(file.type)}20`,
                        borderColor: `${getFileColor(file.type)}40`,
                      }}
                    >
                      <div className="status-icon">
                        {getStatusIcon(file.status)}
                      </div>
                      <span
                        className="file-type-badge"
                        style={{ background: getFileColor(file.type) }}
                      >
                        {file.type}
                      </span>
                    </div>
                    <div className="file-details">
                      <h4>{file.name}</h4>
                      <div className="file-meta">
                        <span>{file.size}</span>
                        {file.status === "uploading" && (
                          <span className="upload-progress-text">
                            {file.progress}%
                          </span>
                        )}
                        {file.status === "success" && (
                          <span className="success-text">Upload complete</span>
                        )}
                        {file.status === "error" && (
                          <span className="error-text">{file.error}</span>
                        )}
                      </div>
                      {file.status === "uploading" && (
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: `${file.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFile(file.id)}
                  >
                    <XCircleIcon />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info Card */}
        <div className="info-card">
          <AlertCircleIcon />
          <div className="info-content">
            <h3>Upload Guidelines</h3>
            <ul>
              <li>Maximum file size: 50MB per file</li>
              <li>Supported formats: CSV, Excel (XLSX/XLS), JSON, XML</li>
              <li>
                Ensure your data includes proper headers and is well-formatted
              </li>
              <li>
                Files will be automatically validated and processed through the
                FUSION pipeline
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadData;
