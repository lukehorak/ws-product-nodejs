Work Sample for Product Aspect, Node.js Variant
---

[What is this for?](https://github.com/EQWorks/work-samples#what-is-this)

### Setup and Run

1. Clone repo to your machine
2. Navigate to repo, and run with `npm start`

#### Configuration

The parameters of this rate limiter are read from `rl_configs.json`. Schema as follows:

`{
  "interface": <name_of_interface>,
  "interval": <interval to rate-limit on, in ms>,
  "limit": <number of requests per interval>
}`

### Contribution

This rate limiter was built to make contributions easier, allowing the development of additional interfaces with ease!

To add your own interface (say, if you want to use API tokens instead of IPs, or store in a DB/Redis): simply add it under the "interfaces" object in `interfaces.js`, and implement it by name in `rl_configs.js` under the "interface" key!