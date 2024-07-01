import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Repositories.css'
import Loading from './Loading';
import ProgrammingLanguages from './ProgrammingLanguages';
import CopyToClipboard from './Clipgoard';

function Repositories() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/amanitaa/repos`);
        setRepos(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchRepos();
  }, ['amanitaa']);

  return (
    <div className='repositories-container'>
      <h1>Repositories of amanitaa</h1>
      <div className='repository-container'>
        {loading ? <Loading/> : error ? <p>Error Fetching repositories: {error.message}</p> : (
            repos.map((repo) => (
            <div key={repo.id} className='repo-card'>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className='repo-link'>{repo.name}</a>
                <div className='repo-details'>Created at: {repo.created_at.split('T')[0]}</div>
                <div className='repo-language'>Language: {repo.language} {<ProgrammingLanguages language={repo.language}/>}</div>
                <div className='repo-details'>Forks: {repo.forks_count}</div>
                <div className='repo-clone-url'><CopyToClipboard text={repo.clone_url}/></div>
            </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Repositories;
