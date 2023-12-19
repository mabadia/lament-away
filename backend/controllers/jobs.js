const express = require('express');
// const { Job } = require('../models');

const router = express.Router();

// Create a new job
router.post('/', async (req, res) => {
    try {
        const job = await Job.create(req.body);
        res.json(job);
    } catch (error) {
        console.error('Error creating job:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get all jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.findAll();
        res.json(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a job by ID
router.get('/:jobId', async (req, res) => {
    const jobId = Number(req.params.jobId);

    try {
        const job = await Job.findByPk(jobId);

        if (!job) {
            res.status(404).json({ message: `Could not find job with id "${jobId}"` });
            return;
        }

        res.json(job);
    } catch (error) {
        console.error('Error fetching job:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a job by ID
router.put('/:jobId', async (req, res) => {
    const jobId = Number(req.params.jobId);

    try {
        const job = await Job.findByPk(jobId);

        if (!job) {
            res.status(404).json({ message: `Could not find job with id "${jobId}"` });
            return;
        }

        await job.update(req.body);
        res.json(job);
    } catch (error) {
        console.error('Error updating job:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a job by ID
router.delete('/:jobId', async (req, res) => {
    const jobId = Number(req.params.jobId);

    try {
        const job = await Job.findByPk(jobId);

        if (!job) {
            res.status(404).json({ message: `Could not find job with id "${jobId}"` });
            return;
        }

        await job.destroy();
        res.json(job);
    } catch (error) {
        console.error('Error deleting job:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;