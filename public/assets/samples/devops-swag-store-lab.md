# DevOps Swag Store lab

You've been tasked with creating a simple website for the fictional store, DevOps Swag Shop, to showcase their collection of merch. As a new developer on the team, you need to quickly get up to speed with the project and become familiar with the work that's already been completed and what still needs to be updated to make the site ready for launch. To help you with rapid iterations, you'll use GitLab Duo as you oversee the process end-to-end, including quickly summarizing long discussion threads, committing code changes, managing broken CI/CD pipelines, and addressing security vulnerabilities.
You'll complete all work on the DevOps Swag Store in the GitLab training environment. Follow the steps below to provision your access.
Note: in order to access to the lab environment, you must have a GitLab.com user account. These accounts are free and you can sign up for an account on GitLab.com.
1. Make sure that you have logged into your GitLab.com account first.
2. Navigate to [gitlabdemo.com/login](https://gitlabdemo.com/login)
3. When prompted for an invitation code, enter the following: xxxxxxx
4. Select Provision Training Environment.
5. When prompted for your GitLab.com username, enter your username without the @ symbol.
6. To find your username, select your profile picture from the main GitLab navigation bar. Your username will be underneath your name.
7. Select Provision Training Environment (again). Take note of your GitLab demo lab credentials and when they expire. We also recommend bookmarking your test group URL for safe keeping.
8. Select My Group to be directly navigated to your test group.
Under your list of projects, you should see a project called DevOps Swag Store.
It's time to get started on your work with the DevOps Swag Store, but first you need to know what you're working on. Prior to being added to the GitLab project, you were assigned an issue outlining some of the history behind the store. In addition to the issue description, there's a scrolling list of comments made from different team members. Using GitLab Duo, read the AI-generated summary below to bring you up to speed:
```plaintext
Update Product Descriptions

All of the products in the catalog currently have very brief, 1-2 sentence descriptions. We should update each product to have a more detailed description that includes:

- Specific features of the product 
- Dimensions/sizing information
- Materials used
- Any other relevant details

This will allow customers to make more informed decisions when purchasing products.

```
From the issue summary, you learned that you'll be picking up with the action item to update the catalog product descriptions. In this exercise, you'll create a new issue in your project to start tracking your work.
1. Navigate to the DevOps Swag Store project in the lab environment.
2. From the lefthand menu, select Issues.
3. Select the New issue button.
4. In the Title textbox, add a name for your issue.
5. In the Description textbox, select the Switch to plain text editing button.
6. From the text editor, select the GitLab Duo (a Tanuki icon) button.
7. Select Generate issue description.
8. In the textbox that appears, write a short summary of the task you'll be working on - updating catalog product descriptions.
9. Select Submit.
10. Review the AI-generated summary and make changes as needed.
11. Assign the issue to yourself and leave all other fields as their defaults.
12. Select Create issue.
You may have noticed as you were working on the DevOps Swag Store merge request that the pipeline failed. Using what you know now about Root Cause Analysis, in this lab we'll use GitLab Duo to fix our broken pipeline.
1. From the lefthand menu, select Build, then Pipelines.
2. Select the most recent pipeline to open the pipeline graph.
3. Select the failed test_job.
4. Select the Troubleshoot button to open GitLab Duo Chat and automatically apply the /troubleshoot slash command.
5. Review the AI-generated explanation of the failure and the example fix.
While the output from GitLab Duo will vary, it should explain the cause of the failure is the exit 1 command in our .gitlab-ci.yml file. In this case, we've intentionally added this code to create a job that always fails. Let's apply the fix to make the job succeed.
1. Return to the root of the project and select the .gitlab-ci.yml file.
2. From the Edit dropdown, select Edit in pipeline editor.
3. In test_job, remove the line - exit 1 and replace it with - echo "Job completed successfully".
4. Write any commit message and select Commit changes.
Wait for the pipeline to run and verify that the job now succeeds.
Now that we have a successful pipeline and we've finished all the changes to our merge request, go ahead and merge the changes! Then, view your newly deployed page to see your updated product descriptions. Nice work!
Let's check in on our DevOps Swag Store project to see if there are any identified security vulnerabilities and use GitLab Duo to propose any needed fixes.
1. From the lefthand menu, expand the Secure section.
2. Select Vulnerability report. You should see one high severity vulnerability identified by the SAST scanner.
3. Select the Explain or Resolve with AI button, then Explain with AI.
4. Review explanation, exploitation example, and proposed fix.
5. Return to the vulnerability overview and select Explain or Resolve with AI.
6. Select Resolve with AI.
7. Review the newly generated merge request, including the suggested changes.
