import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Repos } from '../components/Repos';
import { GithubContext } from '../context/github/githubContext';

export const Profile = ({ match }) => {
  const urlName = match.params.name;
  const { getUser, getRepos, isLoading, user, repos } = useContext(
    GithubContext
  );

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
  }, []);

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <>
      <Link to="/" className="btn btn-link">
        Back to main page
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{ width: '150px' }}
              />
              <h5>{name}</h5>
              {location && (
                <p>
                  <strong>Location:</strong> {location}
                </p>
              )}
            </div>
            <div className="col">
              {bio && (
                <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              )}
              <a
                href={html_url}
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
              >
                Open profile
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Login: </strong>
                    {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company: </strong>
                    {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website: </strong>
                    <a
                      href={blog}
                      className="btn btn-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn page
                    </a>
                  </li>
                )}
              </ul>

              <div className="badge badge-primary">
                Folowers: {followers}
              </div>
              <div className="badge badge-success">
                Folowing: {following}
              </div>
              <div className="badge badge-info">
                Repositories: {public_repos}
              </div>
              <div className="badge badge-dark">
                Gists: {public_gists}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};
