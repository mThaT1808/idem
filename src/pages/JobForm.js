import './JobForm.css';
import JobFormHead from '../components/job_form_head/JobFormHead';
import JobFormBody from '../components/job_form_body/JobFormBody';

function JobForm() {


    return (
        <div className="jobForm">
            <JobFormHead />
            <JobFormBody />
        </div>
    )
}
export default JobForm