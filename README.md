# Github actions certification

## Snippets
- You cannot overwrite the value of the default environment variables named GITHUB_* and RUNNER_*.
- GitHub recommends using variables to access the filesystem rather than hardcoded file paths because variables provide a dynamic way to adapt to different runner environments. 
- Filtering on "failure" will show only the workflow runs that have failed specifically. This is the correct status to filter on if you want to see only the failed workflow runs on the GitHub Actions tab.
- The outputs key in the action's metadata syntax is used to declare the outputs produced by the action. These outputs can then be consumed by subsequent steps in the workflow.
- Passing secrets through the command line can expose them to other users who have access to system logs or command history. This can lead to security vulnerabilities and potential breaches. Security audits may also flag the practice of passing secrets through the command line as a security risk.
- GitHub Actions allows for scheduling workflows with a minimum time granularity of five minutes. This means that workflows can be scheduled to run at specific times or intervals with a precision of five minutes, providing flexibility in automation and execution timing.
- Implementing semantic versioning for your custom GitHub Action is the best practice as it clearly communicates changes and maintains compatibility with existing workflows. Semantic versioning follows a structured format (major.minor.patch) to indicate the significance of changes, making it easier for users to understand the impact of updates.
- GitHub Actions use the Checks API to output statuses, results, and logs for a workflow. GitHub creates a new check suite for each workflow run. The check suite contains a check run for each job in the workflow, and each job includes steps.
- 
- 

## Questions, Definitions, Key terms

### what are Steps In the context of actions and workflows
- they represent individual tasks within a job
- Steps in GitHub Actions represent individual tasks within a job. Each step defines a specific action to be executed, such as checking out code, running tests, or deploying an application. By breaking down the job into smaller, manageable tasks, steps help streamline the workflow process and ensure efficient execution.


### conditions
- The 'only' keyword in GitHub Actions is used to specify the branches or tags on which a job should run. It is not used for conditional execution of steps based on specific expressions or conditions.

- The 'when' keyword in GitHub Actions is used to specify when a job should be run, such as on push events, pull request events, or schedules. It is not used for conditional execution of individual steps within a job.

- The 'if' keyword is used in GitHub Actions to conditionally execute a step based on a specific expression or condition. It allows you to define when a step should run based on the result of the expression provided.

### JavaScript Actions
- Javascript actions are versatile and can run on various operating systems such as Linux, Windows, and macOS runners. This flexibility allows developers to create actions that are compatible with different environments, increasing the usability and reach of the actions.
- Javascript actions run directly on the runner environment and utilize existing binaries, which means they do not require additional setup or installation of dependencies. This makes them efficient and easy to use in GitHub Actions workflows.
- The GitHub Actions toolkit provides a set of tools and utilities that can help streamline the development process of creating and testing actions. By utilizing the toolkit, developers can accelerate the development cycle, improve code quality, and enhance the overall efficiency of creating Javascript actions.

### 'on' keyword
- The YAML keyword "on" is used to specify the events that should trigger a workflow in GitHub Actions. This keyword allows you to define the specific events, such as push, pull request, schedule, or other custom events, that will cause the workflow to run.

### Artifacts Retention Period
- custom retention periods can be defined for individual artifacts using the 'actions/upload-artifact' action
- GitHub Actions allows users to customize the retention period for artifacts by defining custom retention periods for individual artifacts using the actions/upload-artifact action. This feature enables users to manage artifact storage efficiently by specifying how long each artifact should be retained before being automatically removed.

### Requirements publish action in Github Marketplace

Following are the requirements to publish an action to the GitHub Marketplace. They apply to both Docker container-based actions and JavaScript-based actions:

- The action must be in a public repository.
- Each repository must contain a single action.
- The action's metadata file (action.yml or action.yaml) must be in the root directory of the repository.
- The name in the action's metadata file must be unique on the GitHub Marketplace.
- The name can't match a user or organization on GitHub, unless the user or organization owner is publishing the action. For example, only the GitHub organization can publish an action named github.
- The name can't match an existing GitHub Marketplace category.
- The name can't match an existing GitHub feature.

### What is the filename of the metadata file that defines the inputs, outputs, and runs configuration for your action?
The filename "action.yaml" is correct because it is the standard filename for the metadata file that defines the inputs, outputs, and runs configuration for a GitHub Action. This file is essential for configuring and defining the behavior of the action within a repository.

###  primary purpose of caching dependencies in a GitHub Actions workflow?
- decrease network utilization, runtime, and cost
- Caching dependencies in a GitHub Actions workflow helps decrease network utilization, runtime, and cost by storing and reusing dependencies that have already been downloaded or built. This reduces the need to fetch dependencies from external sources repeatedly, leading to faster workflow execution and lower costs associated with data transfer and processing.

### use a combination of GitHub-hosted and self-hosted runners in a workflow
- when dealing with resource-intensive tasks
- Using a combination of GitHub-hosted and self-hosted runners can be beneficial when dealing with resource-intensive tasks. GitHub-hosted runners may have limitations in terms of resources, so adding self-hosted runners with higher capabilities can help handle tasks that require more processing power or memory.

### If you are concerned about the reliability of versioning using tags. What is a recommended alternative to ensure consistency and security in versioning?
- Implementing commit SHAs for versioning provides a reliable and secure alternative to using tags. Commit SHAs uniquely identify each commit in the repository, ensuring consistency and security in versioning. 
- By referencing commit SHAs, you can track changes accurately and avoid potential issues that may arise from using tags. 
- Tags are useful and widely used, but one downside to using tags is that they can be deleted or moved.

### Dependent jobs
- Dependent jobs in a workflow are used to define the sequential execution order within the workflow. This means that one job will only start after the successful completion of the job it depends on, ensuring a specific order of execution.

### Workflow badges
- Badges in GitHub Actions are dynamic status indicators that show whether your automation pipelines (CI/CD) are currently passing, failing, or in another state. These badges are typically embedded in a project's README.md file or other documentation to provide real-time visibility into build health for contributors and users.
- Workflow badges in private repositories are not accessible externally to prevent unauthorized embedding or linking from external sources. This helps maintain the security and privacy of the repository by restricting access to only authorized users.

###  workflows are initiated by specific events defined under the `on` key in your YAML file.

#### Common Core Events
- push: Runs when you push commits or tags to the repository.
- pull_request: Triggered when a PR is opened, updated, or closed.
- schedule: Executes workflows at specific times using POSIX cron syntax.
- workflow_dispatch: Adds a "Run workflow" button in the GitHub Actions UI for manual execution.
- repository_dispatch: Allows external services to trigger a workflow via the GitHub REST API. 

#### Repository & Management Events
- issues: Triggered by activity like opening, editing, or labeling an issue.
- issue_comment: Runs when a comment is created, edited, or deleted on an issue or pull request.
- release: Triggered when a release is created, published, or edited.
- fork: Runs when someone forks your repository.
- watch: Executes when someone stars your repository.
- gollum: Triggered when a project's Wiki page is created or updated.
- discussion / discussion_comment: Triggered by activity in GitHub Discussions.

