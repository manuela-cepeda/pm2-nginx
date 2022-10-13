# pm2 start ecosystem.config.cjs

>>>> In-memory PM2 is out-of-date, do:
>>>> $ pm2 update
In memory PM2 version: 5.2.0
Local PM2 version: 5.2.2

[PM2][WARN] Applications server1, server2, server3 not running, starting...
[PM2] App [server1] launched (1 instances)
[PM2] App [server2] launched (1 instances)
[PM2] App [server3] launched (8 instances)
┌─────┬────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name       │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ server1    │ default     │ 1.0.0   │ fork    │ 29848    │ 10s    │ 0    │ online    │ 0%       │ 33.8mb   │ man… │ disabled │
│ 1   │ server2    │ default     │ 1.0.0   │ fork    │ 4624     │ 9s     │ 0    │ online    │ 0%       │ 34.8mb   │ man… │ disabled │
│ 2   │ server3    │ default     │ 1.0.0   │ cluster │ 25948    │ 8s     │ 0    │ online    │ 0%       │ 35.2mb   │ man… │ disabled │
│ 3   │ server3    │ default     │ 1.0.0   │ cluster │ 19568    │ 7s     │ 0    │ online    │ 0%       │ 34.9mb   │ man… │ disabled │
│ 4   │ server3    │ default     │ 1.0.0   │ cluster │ 25296    │ 6s     │ 0    │ online    │ 0%       │ 35.0mb   │ man… │ disabled │
│ 5   │ server3    │ default     │ 1.0.0   │ cluster │ 6280     │ 5s     │ 0    │ online    │ 0%       │ 35.0mb   │ man… │ disabled │
│ 6   │ server3    │ default     │ 1.0.0   │ cluster │ 8552     │ 4s     │ 0    │ online    │ 0%       │ 34.9mb   │ man… │ disabled │
│ 7   │ server3    │ default     │ 1.0.0   │ cluster │ 14452    │ 3s     │ 0    │ online    │ 0%       │ 35.2mb   │ man… │ disabled │
│ 8   │ server3    │ default     │ 1.0.0   │ cluster │ 20196    │ 2s     │ 0    │ online    │ 0%       │ 34.7mb   │ man… │ disabled │
│ 9   │ server3    │ default     │ 1.0.0   │ cluster │ 25820    │ 1s     │ 0    │ online    │ 0%       │ 34.7mb   │ man… │ disabled │

# pm2 stop server1

>>>> In-memory PM2 is out-of-date, do:
>>>> $ pm2 update
In memory PM2 version: 5.2.0
Local PM2 version: 5.2.2

[PM2] Applying action stopProcessId on app [server1](ids: [ 0 ])
[PM2] [server1](0) ✓
┌─────┬────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name       │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ server1    │ default     │ 1.0.0   │ fork    │ 0        │ 0      │ 0    │ stopped   │ 0%       │ 0b       │ man… │ disabled │
│ 1   │ server2    │ default     │ 1.0.0   │ fork    │ 4624     │ 4m     │ 0    │ online    │ 0%       │ 34.1mb   │ man… │ disabled │
│ 2   │ server3    │ default     │ 1.0.0   │ cluster │ 25948    │ 4m     │ 0    │ online    │ 0%       │ 32.0mb   │ man… │ disabled │
│ 3   │ server3    │ default     │ 1.0.0   │ cluster │ 19568    │ 4m     │ 0    │ online    │ 0%       │ 31.6mb   │ man… │ disabled │
│ 4   │ server3    │ default     │ 1.0.0   │ cluster │ 25296    │ 4m     │ 0    │ online    │ 0%       │ 31.7mb   │ man… │ disabled │
│ 5   │ server3    │ default     │ 1.0.0   │ cluster │ 6280     │ 4m     │ 0    │ online    │ 0%       │ 31.7mb   │ man… │ disabled │
│ 6   │ server3    │ default     │ 1.0.0   │ cluster │ 8552     │ 4m     │ 0    │ online    │ 0%       │ 31.7mb   │ man… │ disabled │
│ 7   │ server3    │ default     │ 1.0.0   │ cluster │ 14452    │ 4m     │ 0    │ online    │ 0%       │ 31.9mb   │ man… │ disabled │
│ 8   │ server3    │ default     │ 1.0.0   │ cluster │ 20196    │ 4m     │ 0    │ online    │ 0%       │ 31.5mb   │ man… │ disabled │
│ 9   │ server3    │ default     │ 1.0.0   │ cluster │ 25820    │ 4m     │ 0    │ online    │ 0%       │ 31.1mb   │ man… │ disabled │
└─────┴────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘

# pm2 delete 0

>>>> In-memory PM2 is out-of-date, do:
>>>> $ pm2 update
In memory PM2 version: 5.2.0
Local PM2 version: 5.2.2

[PM2] Applying action deleteProcessId on app [0](ids: [ '0' ])
[PM2] [server1](0) ✓
┌─────┬────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name       │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 1   │ server2    │ default     │ 1.0.0   │ fork    │ 4624     │ 5m     │ 0    │ online    │ 0%       │ 34.8mb   │ man… │ disabled │
│ 2   │ server3    │ default     │ 1.0.0   │ cluster │ 25948    │ 5m     │ 0    │ online    │ 0%       │ 31.2mb   │ man… │ disabled │
│ 3   │ server3    │ default     │ 1.0.0   │ cluster │ 19568    │ 5m     │ 0    │ online    │ 0%       │ 30.9mb   │ man… │ disabled │
│ 4   │ server3    │ default     │ 1.0.0   │ cluster │ 25296    │ 5m     │ 0    │ online    │ 0%       │ 31.8mb   │ man… │ disabled │
│ 5   │ server3    │ default     │ 1.0.0   │ cluster │ 6280     │ 5m     │ 0    │ online    │ 0%       │ 31.8mb   │ man… │ disabled │
│ 6   │ server3    │ default     │ 1.0.0   │ cluster │ 8552     │ 5m     │ 0    │ online    │ 0%       │ 31.8mb   │ man… │ disabled │
│ 7   │ server3    │ default     │ 1.0.0   │ cluster │ 14452    │ 5m     │ 0    │ online    │ 0%       │ 31.3mb   │ man… │ disabled │
│ 8   │ server3    │ default     │ 1.0.0   │ cluster │ 20196    │ 5m     │ 0    │ online    │ 0%       │ 31.5mb   │ man… │ disabled │
│ 9   │ server3    │ default     │ 1.0.0   │ cluster │ 25820    │ 5m     │ 0    │ online    │ 3.1%     │ 31.2mb   │ man… │ disabled │

# pm2 delete all

>>>> In-memory PM2 is out-of-date, do:
>>>> $ pm2 update
In memory PM2 version: 5.2.0
Local PM2 version: 5.2.2

[PM2] Applying action deleteProcessId on app [all](ids: [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
])
[PM2] [server3](4) ✓
[PM2] [server3](3) ✓
[PM2] [server3](2) ✓
[PM2] [server2](1) ✓
[PM2] [server3](5) ✓
[PM2] [server3](6) ✓
[PM2] [server3](7) ✓
[PM2] [server3](8) ✓
[PM2] [server3](9) ✓
┌─────┬───────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name      │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │