import usePersist from "../Persist";
import Memo from './Memo'
import AddForm from './AddForm'
import FindForm from './FindForm'
import DelForm from './DelForm'

const MemoPage = () => {
  const [mode, setMode]:any = usePersist('mode', 'default')

  return (
    <>
      <h5 className="my-3">mode: {mode}</h5>
      <div className="alert alert-primary pb-0">
        <AddForm />
        <FindForm />
        <DelForm />
      </div>
      <Memo />
    </>
  )
}

export default MemoPage
