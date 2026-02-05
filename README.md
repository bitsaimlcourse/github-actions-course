# Github actions certification

## Snippets
- In a typical scenario, an `event` serves as the trigger that initiates a `workflow`. This workflow can then execute one or more `jobs`, each of which consists of one or more `steps`. 
- You cannot overwrite the value of the default environment variables named GITHUB_* and RUNNER_*.
- GitHub recommends using variables to access the filesystem rather than hardcoded file paths because variables provide a dynamic way to adapt to different runner environments. 
- Filtering on "failure" will show only the workflow runs that have failed specifically. This is the correct status to filter on if you want to see only the failed workflow runs on the GitHub Actions tab.
- The outputs key in the action's metadata syntax is used to declare the outputs produced by the action. These outputs can then be consumed by subsequent steps in the workflow.
- Passing secrets through the command line can expose them to other users who have access to system logs or command history. This can lead to security vulnerabilities and potential breaches. Security audits may also flag the practice of passing secrets through the command line as a security risk.
- GitHub Actions allows for scheduling workflows with a minimum time granularity of five minutes. This means that workflows can be scheduled to run at specific times or intervals with a precision of five minutes, providing flexibility in automation and execution timing.
- Implementing semantic versioning for your custom GitHub Action is the best practice as it clearly communicates changes and maintains compatibility with existing workflows. Semantic versioning follows a structured format (major.minor.patch) to indicate the significance of changes, making it easier for users to understand the impact of updates.
- GitHub Actions use the Checks API to output statuses, results, and logs for a workflow. GitHub creates a new check suite for each workflow run. The check suite contains a check run for each job in the workflow, and each job includes steps.
- Runner groups in GitHub Actions allow you to organize and group runners based on specific criteria, such as availability, capacity, or cost. By assigning workflows to specific runner groups, you can ensure that development workflows do not utilize the runners paid for by your team, thus helping to manage `infrastructure costs` effectively.
- When drafting a new release and publishing an action to GitHub Marketplace, it is essential that the action's metadata file's category matches an existing GitHub Marketplace category. This ensures that the action is listed in the correct category for users to discover and use effectively.
- GitHub provides runners with a scoped installation token that has read access to the repository where the actions are stored. This token is automatically generated and expires after one hour, ensuring access control and security by limiting the duration of access to the actions.
- GitHub automatically redacts secrets printed to workflow logs, replacing them with placeholders. This feature ensures that sensitive information such as secrets are not exposed in plain text within the logs, mitigating the risk of unauthorized access to confidential data.
- By defining dependencies in the workflow YAML file, you can specify the order in which jobs should run based on the success or failure of other jobs.
- `RUNNER_OS` default environment variable contains the operating system of the runner executing the job. It provides information about the specific operating system environment in which the GitHub Actions workflow is running, allowing for conditional logic based on the OS.
- a `GITHUB_TOKEN` expires either when a job finishes or after a maximum of 24 hours.
- In GitHub Actions, you can use workflow commands to send instructions to the runner environment. These commands allow you to perform various tasks, including creating error annotations, setting environment variables, printing debug messages, and more. By using workflow commands, you can create error annotations without directly modifying the workflow code.

## Questions, Definitions, Key terms

### Workflow templates 
- Workflow templates in GitHub Actions allow organizations to create standardized, reusable automation workflows that can be easily applied to multiple repositories. 
- By using workflow templates, organizations can ensure consistency, reduce duplication of effort, and maintain automation standards across their projects.

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

### Composite actions
- Composite actions in GitHub Actions allow users to combine multiple workflow steps into a single reusable action. 
- This helps streamline the execution of workflows by encapsulating complex logic or repeated steps into a single unit, making workflows easier to read and maintain.

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

### Print DEBUG message
- The correct way to print a debug message to the log in GitHub Actions is by using the `echo "::debug::message"` syntax. This will output the specified message as a debug message in the workflow log, allowing you to troubleshoot the issue effectively.

### release strategy for a GitHub Action
- Defining a release-management strategy and documenting major version updates, critical fixes, and security patches is the correct approach to creating a release strategy for a GitHub Action. 
- This ensures transparency, helps users understand the significance of updates, and allows for effective communication of changes. 
- Versioning is crucial for managing dependencies and ensuring compatibility with different workflows.

### Which configuration is appropriate for triggering a workflow on a pull request?

```
on:
  pull_request:
    branches:
      - main
```

This configuration is correct as it specifies that the workflow should be triggered on a pull request specifically for the 'main' branch. This ensures that the workflow runs when a pull request is opened, updated, or synchronized for the 'main' branch.

### How many jobs will be executed in below script?

```
jobs:
  matrix-job:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        animal: [cat, dog, bear]
        color: [black, brown]
    steps:
      - run: echo "Hello ${{ matrix.color }} ${{ matrix.animal }}"
```

The workflow defines a matrix job with two axes: 'animal' with values [cat, dog, bear] and 'color' with values [black, brown]. This results in a total of 3 (animal) x 2 (color) = 6 different combinations. Each combination will result in a separate job execution, hence a total of 6 jobs will be executed in this workflow.

### Custom labels 
- Custom labels in GitHub Actions are primarily used for routing jobs to specific types of self-hosted runners based on their labels. This allows for better resource management and optimization by ensuring that jobs are executed on the most suitable runners based on their capabilities and configurations.
- In GitHub Actions, custom labels are cumulative, meaning that a self-hosted runner must have all assigned labels to be eligible to process a job. This ensures that the runner meets all the specific requirements set by the labels.

### You have created a secret named api_key to use in a workflow that deploys a new application. Which of the following is the correct syntax to reference the secret as an environment variable?

```
steps:
  - shell: bash
    env:
      ENV_API_KEY: ${{ secrets.api_key }}
    run: |
      ./app_install.sh
```

### What are valid ways to specify the version of the checkout action within a GitHub workflow configuration?
You can include the version of the action in several ways including specifying a Git ref, SHA, tag, or branch. 

Examples include:

    # Reference a specific commit
    - uses: actions/checkout@8f4b7f84864484a7bf31766abe9204da3cbe65b3
    # Reference the major version of a release
    - uses: actions/checkout@v4
    # Reference a specific version
    - uses: actions/checkout@v4.2.0
    # Reference a branch
    - uses: actions/checkout@main

### When creating a custom action for GitHub Actions, which of the following files are required?
- Essential files required to create a custom action for GitHub Actions. This includes understanding the necessary files and their formats, such as JavaScript files (main.js or index.js) for JavaScript actions and an action metadata file (action.yml or action.yaml) to define the action's configuration and behavior.
- Dockerfile is required for containerized actions, as it specifies the environment and dependencies needed to run the custom action within a container.

### a GitHub Action that requires a specific Linux operating system
- Docker container actions are best suited for environments that require specific operating systems and custom tools. 

### On GitHub-hosted runners, what is recorded in the "Set up job" step of a given job? 
- runner image
- operating system
- GITHUB_TOKEN permissions

### What steps should you take to share your custom action with the GitHub community
- ensure your repository is public, define the action's inputs, outputs, and environment variables, and publish the action as a Docker container

### In a workflow requiring review, what action is taken if a job is rejected?
- If a job is rejected in a workflow requiring review, the workflow fails as the job did not meet the required criteria for approval. 
- This failure indicates that the job needs to be reviewed and potentially revised before proceeding further in the workflow.

### Custom Env Variable
- To set a custom environment variable for a single workflow, you can define it using the ‘env’ key in the workflow file. 
- The scope of a custom variable set by this method is limited to the element in which it is defined.

### valid custom actions types within GitHub?
- Docker container actions: These are actions packaged as Docker containers, allowing developers to encapsulate their actions and dependencies within a container. Docker container actions provide a consistent and reproducible environment for executing actions across different platforms and environments.
- JavaScript actions: JavaScript actions are written in JavaScript and run within the Node.js runtime environment. They provide flexibility for developers who are comfortable with JavaScript and want to leverage its ecosystem and libraries to create custom actions for their GitHub workflows.
- Composite actions: Composite actions are reusable actions composed of other actions, allowing developers to encapsulate common patterns or sequences of steps into a single action. They promote code reusability and maintainability by enabling developers to define complex workflows as composable units that can be easily shared and reused across projects.

### configuration for triggering a workflow on a commit to a feature branch?

```

on:
  push:
    branches:
      - 'feature/*'
```

This configuration specifies that the workflow should be triggered on a push event to any branch that starts with 'feature/'. This is the correct configuration for triggering a workflow on a commit to a feature branch.

### level of access is required to download workflow artifacts?
- Users with 'read' access can view and download workflow artifacts but cannot make any changes to the repository or workflows.

### GPG
- Using a workaround involving encryption with GPG and storing the decryption passphrase as a secret is the recommended approach for storing secrets larger than 48 KB. 
- This method allows you to securely store and access large secrets while maintaining the necessary security measures.
- Use this command in terminal `gpg --symmetric --cipher-algo AES256 my_secret.json` 
- You will be prompted to enter a passphrase. Remember the passphrase, because you'll need to create a new secret on GitHub that uses the passphrase as the value.

### In GitHub Actions, if you define both branches and paths filter, what is the effect on the workflow execution?
- the workflow will only run when both `branches` and `paths` are satisfied
