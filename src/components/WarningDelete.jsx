import PropTypes from 'prop-types';

const WarningDelete = ({userToDelete, deleteUser, alert, cancelDelete}) => {
    
    return (
        <div>
            {alert &&
                <div className='container__form'>
                    <div className='card__form'>
                        <div className='border__form'>
                            <h3>Deseas eliminar el usuario: <br /><br /> {userToDelete.first_name} {userToDelete.last_name}</h3>
                            <hr />
                            <p>😯si eliminas😯</p>
                            <p>😕los datos no podran recuperarse😕 </p>
                            <div className='btn__warning'>
                                <button className='btn__delete' onClick={() => deleteUser(userToDelete)}>Eliminar</button>
                                <button className='btn__cancel' onClick={() => cancelDelete()}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};
    WarningDelete.propTypes = {
    userToDelete: PropTypes.object.isRequired, 
    deleteUser: PropTypes.func.isRequired, 
    alert: PropTypes.bool.isRequired, 
    cancelDelete: PropTypes.func.isRequired, 
  };

export default WarningDelete;