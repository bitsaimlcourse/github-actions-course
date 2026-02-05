# Github actions certification

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

### 
