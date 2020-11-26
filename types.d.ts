/**
 * Create request options compatible with the console swagger definition
 * @param apiKey - apiKey to access console api
 * @param options - optional data used for building the request options
 * @param [options.parameters] - parameters to set to the request, specific to each endpoint
 * @param [options.body] - request body for the request
 * @returns [{ swaggerParameters }, { requestBody }]
 */
declare function createRequestOptions(apiKey: string, options: {
    parameters?: any;
    body?: any;
}): any[];

/**
 * Build a swagger request interceptor for the console sdk
 * @param coreConsoleAPIInstance - console core api instance
 * @param apihost - console api url host
 * @returns a request interceptor
 */
declare function requestInterceptorBuilder(coreConsoleAPIInstance: any, apihost: string): (...params: any[]) => any;

/**
 * A swagger response interceptor for the console sdk
 * @param res - the response object
 * @returns the response object
 */
declare function responseInterceptor(res: any): any;

/**
 * @property url - requested url
 * @property ok - response ok indicator
 * @property status - response status code
 * @property statusText - response status text
 * @property headers - response headers
 * @property body - response body object
 * @property obj - response body object
 * @property data - response body string
 * @property text - response body string
 */
declare type ConsoleResponse = {
    url: string;
    ok: boolean;
    status: number;
    statusText: number;
    headers: any;
    body: any;
    obj: any;
    data: any;
    text: any;
};

/**
 * @property name - Name
 * @property title - Title
 * @property [who_created] - Creator name
 * @property [description] - Description
 * @property type - Type (default or jaeger)
 */
declare type ProjectDetails = {
    name: string;
    title: string;
    who_created?: string;
    description?: string;
    type: string;
};

/**
 * @property name - Name
 * @property [title] - Title
 * @property [who_created] - Creator name
 * @property [description] - Description
 * @property [type] - Type
 * @property [quotaRule] - quotaRule
 */
declare type WorkspaceDetails = {
    name: string;
    title?: string;
    who_created?: string;
    description?: string;
    type?: string;
    quotaRule?: string;
};

/**
 * @property name - Name
 * @property description - Description
 * @property platform - Platform
 * @property [urlScheme] - url scheme
 * @property [redirectUriList] - List of redirect URIs
 * @property [defaultRedirectUri] - Default redirect URI
 * @property [domain] - domain
 * @property [approvalInfo] - approvalInfo
 */
declare type AdobeIdIntegrationDetails = {
    name: string;
    description: string;
    platform: string;
    urlScheme?: string;
    redirectUriList?: any;
    defaultRedirectUri?: string;
    domain?: string;
    approvalInfo?: any;
};

/**
 * Returns a Promise that resolves with a new CoreConsoleAPI object
 * @param accessToken - the access token corresponding to an integration or user token
 * @param apiKey - api key to access the Developer Console
 * @param [env = prod] - the server environment ('prod' or 'stage')
 * @returns a Promise with a CoreConsoleAPI object
 */
declare function init(accessToken: string, apiKey: string, env?: string): Promise<CoreConsoleAPI>;

/**
 * This class provides methods to call your CoreConsoleAPI APIs.
 * Before calling any method, initialize the instance by calling the `init` method on it
 * with valid values for apiKey and accessToken
 */
declare class CoreConsoleAPI {
    /**
     * Initializes a CoreConsoleAPI object and returns it
     * @param accessToken - the access token corresponding to an integration or user token
     * @param apiKey - api key to access the Developer Console
     * @param [env = prod] - the server environment ('prod' or 'stage')
     * @returns a CoreConsoleAPI object
     */
    init(accessToken: string, apiKey: string, env?: string): Promise<CoreConsoleAPI>;
    /**
     * Get all Projects in an Organization
     * @param organizationId - Organization AMS ID
     * @returns the response
     */
    getProjectsForOrg(organizationId: string): Promise<ConsoleResponse>;
    /**
     * Create a new Firefly Project (from template) in an Organization
     * @param organizationId - Organization AMS ID
     * @param projectDetails - Project details including name, title, who_created, description and type
     * @returns the response
     */
    createFireflyProject(organizationId: string, projectDetails: ProjectDetails): Promise<ConsoleResponse>;
    /**
     * Create a new Project in an Organization
     * @param organizationId - Organization AMS ID
     * @param projectDetails - Project details including name, title, who_created, description and type
     * @returns the response
     */
    createProject(organizationId: string, projectDetails: ProjectDetails): Promise<ConsoleResponse>;
    /**
     * Get all Workspaces for a Project
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @returns the response
     */
    getWorkspacesForProject(organizationId: string, projectId: string): Promise<ConsoleResponse>;
    /**
     * Delete a Project
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @returns the response
     */
    deleteProject(organizationId: string, projectId: string): Promise<ConsoleResponse>;
    /**
     * Edit a Project
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param projectDetails - Project details including name, title, who_created, description and type
     * @returns the response
     */
    editProject(organizationId: string, projectId: string, projectDetails: ProjectDetails): Promise<ConsoleResponse>;
    /**
     * Get a Project by ID
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @returns the response
     */
    getProject(organizationId: string, projectId: string): Promise<ConsoleResponse>;
    /**
     * Download the Workspace Configuration File (json)
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param workspaceId - Workspace ID
     * @returns the response
     */
    downloadWorkspaceJson(organizationId: string, projectId: string, workspaceId: string): Promise<ConsoleResponse>;
    /**
     * Create a new Workspace
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param workspaceDetails - Workspace details including name, title, who_created, description, type and quotaRule
     * @returns the response
     */
    createWorkspace(organizationId: string, projectId: string, workspaceDetails: WorkspaceDetails): Promise<ConsoleResponse>;
    /**
     * Edit a Workspace
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param workspaceId - Workspace ID
     * @param workspaceDetails - Workspace details including name, title, who_created, description, type and quotaRule
     * @returns the response
     */
    editWorkspace(organizationId: string, projectId: string, workspaceId: string, workspaceDetails: WorkspaceDetails): Promise<ConsoleResponse>;
    /**
     * Get a Workspace by ID
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param workspaceId - Workspace ID
     * @returns the response
     */
    getWorkspace(organizationId: string, projectId: string, workspaceId: string): Promise<ConsoleResponse>;
    /**
     * Delete a Workspace
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param workspaceId - Workspace ID
     * @returns the response
     */
    deleteWorkspace(organizationId: string, projectId: string, workspaceId: string): Promise<ConsoleResponse>;
    /**
     * Get all credentials for a Workspace
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param workspaceId - Workspace ID
     * @returns the response
     */
    getCredentials(organizationId: string, projectId: string, workspaceId: string): Promise<ConsoleResponse>;
    /**
     * Create a new Enterprise Credential for a Workspace
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param workspaceId - Workspace ID
     * @param certificate - A Readable stream with certificate content. eg: fs.createReadStream()
     * @param name - Credential name
     * @param description - Credential description
     * @returns the response
     */
    createEnterpriseCredential(organizationId: string, projectId: string, workspaceId: string, certificate: any, name: string, description: string): Promise<ConsoleResponse>;
    /**
     * Create a new AdobeID Credential for a Workspace
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param workspaceId - Workspace ID
     * @param credentialDetails - Credential details
     * @returns the response
     */
    createAdobeIdCredential(organizationId: string, projectId: string, workspaceId: string, credentialDetails: AdobeIdIntegrationDetails): Promise<ConsoleResponse>;
    /**
     * Create a new Analytics Credential for a Workspace
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param workspaceId - Workspace ID
     * @param credentialDetails - Credential details
     * @returns the response
     */
    createAnalyticsCredential(organizationId: string, projectId: string, workspaceId: string, credentialDetails: AdobeIdIntegrationDetails): Promise<ConsoleResponse>;
    /**
     * Subscribe a Workspace Credential to Services
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param workspaceId - Workspace ID
     * @param credentialType - Credential type (adobeid, analytics or entp)
     * @param credentialId - Credential ID
     * @param serviceInfo - Information about the services like SDK Codes, licenseConfig and roles
     * @returns the response
     */
    subscribeCredentialToServices(organizationId: string, projectId: string, workspaceId: string, credentialType: string, credentialId: string, serviceInfo: any): Promise<ConsoleResponse>;
    /**
     * Get the Workspace from a Credential ID
     * @param organizationId - Organization AMS ID
     * @param credentialId - Credential ID
     * @returns the response
     */
    getWorkspaceForCredential(organizationId: string, credentialId: string): Promise<ConsoleResponse>;
    /**
     * Get the Project of a Workspace
     * @param organizationId - Organization AMS ID
     * @param workspaceId - Workspace ID
     * @returns the response
     */
    getProjectForWorkspace(organizationId: string, workspaceId: string): Promise<ConsoleResponse>;
    /**
     * Delete a Workspace Credential
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param workspaceId - Workspace ID
     * @param credentialType - Credential type (adobeid, analytics or entp)
     * @param credentialId - Credential ID
     * @returns the response
     */
    deleteCredential(organizationId: string, projectId: string, workspaceId: string, credentialType: string, credentialId: string): Promise<ConsoleResponse>;
    /**
     * Get all Organizations
     * @returns the response
     */
    getOrganizations(): Promise<ConsoleResponse>;
    /**
     * Get all Services available to an Organization
     * @param organizationId - Organization AMS ID
     * @returns the response
     */
    getServicesForOrg(organizationId: string): Promise<ConsoleResponse>;
    /**
     * Create an Adobe I/O Runtime namespace in the given workspace
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param workspaceId - Workspace ID
     * @returns the response
     */
    createRuntimeNamespace(organizationId: string, projectId: string, workspaceId: string): Promise<ConsoleResponse>;
    /**
     * Get plugins for workspace
     * @param organizationId - Organization AMS ID
     * @param projectId - Project ID
     * @param workspaceId - Workspace ID
     * @returns the response
     */
    getPluginsForWorkspace(organizationId: string, projectId: string, workspaceId: string): Promise<ConsoleResponse>;
    /**
     * Get Integrations for an Organization
     * @param organizationId - Organization AMS ID
     * @returns the response
     */
    getIntegrationsForOrg(organizationId: string): Promise<ConsoleResponse>;
    /**
     * Create a new Enterprise Integration for an Organization
     * @param organizationId - Organization AMS ID
     * @param certificate - A Readable stream with certificate content. eg: fs.createReadStream()
     * @param name - Integration name
     * @param description - Integration description
     * @returns the response
     */
    createEnterpriseIntegration(organizationId: string, certificate: any, name: string, description: string): Promise<ConsoleResponse>;
    /**
     * Create a new AdobeID Integration for an Organization
     * @param organizationId - Organization AMS ID
     * @param integrationDetails - Integration details
     * @returns the response
     */
    createAdobeIdIntegration(organizationId: string, integrationDetails: AdobeIdIntegrationDetails): Promise<ConsoleResponse>;
    /**
     * Update an AdobeID Integration for an Organization
     * @param organizationId - Organization AMS ID
     * @param integrationId - Integration ID to update
     * @param integrationDetails - Integration details
     * @returns the response
     */
    updateAdobeIdIntegration(organizationId: string, integrationId: string, integrationDetails: AdobeIdIntegrationDetails): Promise<ConsoleResponse>;
    /**
     * Subscribe Organization AdobeId Integration to Services
     * @param organizationId - Organization AMS ID
     * @param integrationId - Integration ID
     * @param serviceInfo - Information about the services like SDK Codes, licenseConfig and roles
     * @returns the response
     */
    subscribeAdobeIdIntegrationToServices(organizationId: string, integrationId: string, serviceInfo: any): Promise<ConsoleResponse>;
    /**
     * Subscribe Organization Enterprise Integration to Services
     * @param organizationId - Organization AMS ID
     * @param integrationId - Integration ID
     * @param serviceInfo - Information about the services like SDK Codes, licenseConfig and roles
     * @returns the response
     */
    subscribeEnterpriseIntegrationToServices(organizationId: string, integrationId: string, serviceInfo: any): Promise<ConsoleResponse>;
    /**
     * List certification bindings for an Integration
     * @param organizationId - Organization AMS ID
     * @param integrationId - Integration ID
     * @returns the response
     */
    getBindingsForIntegration(organizationId: string, integrationId: string): Promise<ConsoleResponse>;
    /**
     * Upload and bind a certificate to an Organization Integration
     * @param organizationId - Organization AMS ID
     * @param integrationId - Integration ID
     * @param certificate - A Readable stream with certificate content. eg: fs.createReadStream()
     * @returns the response
     */
    uploadAndBindCertificate(organizationId: string, integrationId: string, certificate: any): Promise<ConsoleResponse>;
    /**
     * Delete a certificate binding for an Integration
     * @param organizationId - Organization AMS ID
     * @param integrationId - Integration ID
     * @param bindingId - Binding ID
     * @returns the response
     */
    deleteBinding(organizationId: string, integrationId: string, bindingId: string): Promise<ConsoleResponse>;
    /**
     * Get Integration details
     * @param organizationId - Organization AMS ID
     * @param integrationId - Integration ID
     * @returns the response
     */
    getIntegration(organizationId: string, integrationId: string): Promise<ConsoleResponse>;
    /**
     * Get Integration secrets
     * @param organizationId - Organization AMS ID
     * @param integrationId - Integration ID
     * @returns the response
     */
    getIntegrationSecrets(organizationId: string, integrationId: string): Promise<ConsoleResponse>;
    /**
     * Delete an Integration
     * @param organizationId - Organization AMS ID
     * @param integrationId - Integration ID
     * @returns the response
     */
    deleteIntegration(organizationId: string, integrationId: string): Promise<ConsoleResponse>;
    /**
     * Create an IMS Org
     * @returns the response
     */
    createIMSOrg(): Promise<ConsoleResponse>;
    /**
     * Get Application Atlas Policy for an Integration
     * @param organizationId - Organization AMS ID
     * @param integrationId - Integration ID
     * @returns the response
     */
    getAtlasApplicationPolicy(organizationId: string, integrationId: string): Promise<ConsoleResponse>;
    /**
     * Get Atlas quota usage for an Integration
     * @param organizationId - Organization AMS ID
     * @param integrationId - Integration ID
     * @returns the response
     */
    getAtlasQuotaUsage(organizationId: string, integrationId: string): Promise<ConsoleResponse>;
    /**
     * Validate App Registry (Exchange) Application name
     * @param organizationId - Organization AMS ID
     * @param applicationName - Application name to validate
     * @returns the response
     */
    validateApplicationName(organizationId: string, applicationName: string): Promise<ConsoleResponse>;
    /**
     * Get App Registry (Exchange) Application details
     * @param organizationId - Organization AMS ID
     * @param applicationId - Application ID
     * @returns the response
     */
    getApplicationById(organizationId: string, applicationId: string): Promise<ConsoleResponse>;
    /**
     * Update App Registry (Exchange) Application, application details are patched.
     * @param organizationId - Organization AMS ID
     * @param applicationId - Application ID
     * @param applicationDetails - Application details to update
     * @returns the response
     */
    updateApplication(organizationId: string, applicationId: string, applicationDetails: any): Promise<ConsoleResponse>;
    /**
     * Delete App Registry (Exchange) Application
     * @param organizationId - Organization AMS ID
     * @param applicationId - Application ID
     * @returns the response
     */
    deleteApplication(organizationId: string, applicationId: string): Promise<ConsoleResponse>;
    /**
     * Get App Registry (Exchange) Application by name
     * @param organizationId - Organization AMS ID
     * @param applicationName - Application Name
     * @returns the response
     */
    getApplicationByName(organizationId: string, applicationName: string): Promise<ConsoleResponse>;
    /**
     * Submit an Application to App Registry (Exchange)
     * @param organizationId - Organization AMS ID
     * @param applicationId - Application ID
     * @param submitterNotes - Notes from submitter
     * @returns the response
     */
    submitApplication(organizationId: string, applicationId: string, submitterNotes: string): Promise<ConsoleResponse>;
    /**
     * Get all App Registry (Exchange) Application
     * @param organizationId - Organization AMS ID
     * @param offset - offset for returned list
     * @param pageSize - number of elements to return
     * @returns the response
     */
    getAllApplicationsForUser(organizationId: string, offset: number, pageSize: number): Promise<ConsoleResponse>;
    /**
     * Upload an Icon for an Application in App Registry (Exchange)
     * @param organizationId - Organization AMS ID
     * @param applicationId - Application Name
     * @param icon - A Readable stream with the Icon file content. eg: fs.createReadStream().
     *        The icon must be of size 512x512 and of type png or jpg.
     * @returns the response
     */
    uploadApplicationIcon(organizationId: string, applicationId: string, icon: any): Promise<ConsoleResponse>;
    /**
     * Get App Registry (Exchange) health
     * @param organizationId - Organization AMS ID
     * @returns the response
     */
    getAppRegistryHealth(organizationId: string): Promise<ConsoleResponse>;
}

