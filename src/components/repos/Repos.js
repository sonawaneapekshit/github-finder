import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({repos}) => {
  console.log(repos)
  console.log(typeof repos)
  return (
    <>
    {
      repos?.map(repo => (
        <RepoItem repo={repo} key={repo.id}/>
      ))
    }
    </>
  )
}

Repos.propType = {
  repo: PropTypes.object
}

export default Repos;