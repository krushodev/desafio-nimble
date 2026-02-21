// --- Response DTOs ---

export interface CandidateDTO {
  uuid: string;
  candidateId: string;
  applicationId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface JobDTO {
  id: string;
  title: string;
}

// --- Request payloads ---

export interface ApplyToJobPayload {
  uuid: string;
  jobId: string;
  candidateId: string;
  repoUrl: string;
}

// --- Error handling ---

export interface ApiError {
  isApiError: true;
  message: string;
  statusCode: number | null;
}
