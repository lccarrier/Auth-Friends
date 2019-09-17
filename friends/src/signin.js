import React from 'react'
import styled from 'styled-components'

const Signin = () => {
    return (
        <div>
            <Div>
                <label>Username</label>
                <input  placeholder="Enter your username" />
            </Div>

            <Div>
                <label>Password</label>
                <input placeholder="Enter your password" />
            </Div>

            <button>Sign in</button>
        </div>
    )
}

const Div = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;

    label {
        font-size: 12px;
        display: inline-block;
        margin-bottom: 5px;
    }

    input { 
        width: 200px;
    }
`

export default Signin
