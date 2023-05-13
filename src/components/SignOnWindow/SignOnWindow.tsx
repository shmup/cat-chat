import { useState } from "react";
import RetroWindow from "../RetroWindow/RetroWindow";
import { Grid } from '@mui/material';
import "./sign-on-window.scss";
import KeyIcon from '@mui/icons-material/Key';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export default function SignOnWindow() {
    const [screenNameValue, setScreenNameValue] = useState<string>('');
    const [disabled, setDisabled] = useState<boolean>(false);

    function onGetScreeNameClicked() {

    }

    function onForgotPasswordClicked() {

    }

    function onHelpClicked() {

    }

    function onSettingsClicked() {

    }

    function onSignOnClicked(event: any): void {
        
    }

    function onSignOn(e: any) {
        e.preventDefault();
        setDisabled(true);
    }

    return (
        <RetroWindow className="sign-on-window" title="Sign On">
            <form noValidate method="post" onSubmit={onSignOn}>
                <div className="sign-on-box-logo">
                    <span>Cat Instant Messenger</span>
                </div>
                <div className="sign-on-fields-container">
                    <div className="field-row-stacked">
                        <label 
                            htmlFor="screen-name"
                            className="screen-name-label bold">
                            Screen Name
                            <KeyIcon />
                        </label>
                        <input 
                            id="screen-name"
                            type="text"
                            className="sign-on-text-field"
                            value={screenNameValue}
                            disabled={disabled}
                            onChange={(e) => setScreenNameValue(e.target.value) }
                            />
                    </div>
                    <button
                        className="button-link get-a-screen-name"
                        onClick={onGetScreeNameClicked}>
                        Get a Screen Name
                    </button>
                    <div className="field-row-stacked">
                        <label htmlFor="password" className="bold">Password</label>
                        <input 
                            id="password"
                            type="password"
                            className="sign-on-text-field"
                            disabled={disabled}
                            />
                    </div>

                    <button
                        className="button-link forgot-password"
                        onClick={onForgotPasswordClicked}>
                        Forgot Password?
                    </button>

                    <Grid container className="sign-on-login-settings">
                        <Grid item xs={7}>
                            <input 
                                type="checkbox"
                                id="save-password"
                                defaultChecked 
                                />
                            <label htmlFor="save-password">Save password</label>
                        </Grid>
                        <Grid item xs={5}>
                            <input 
                                type="checkbox" 
                                id="auto-login" 
                                defaultChecked
                                />
                            <label htmlFor="auto-login">Auto login</label>
                        </Grid>
                    </Grid>
                    
                    {/* Toolbar */}
                    <Grid container className="sign-on-toolbar">
                        <Grid item xs={1} className="sign-on-help">
                            <button type="button"
                                    onClick={onHelpClicked}
                                    className="toolbar-buttons">
                                <QuestionMarkIcon />
                                Help
                            </button>
                        </Grid>
                        <Grid item xs={3} className="sign-on-settings">
                            <button type="button"
                                    onClick={onSettingsClicked}
                                    className="toolbar-buttons">
                                <BuildIcon className="sign-on-settings-button" />
                                Setup
                            </button>
                        </Grid>
                        <Grid item xs={8} className="sign-on-wrapper">
                            <div className="sign-on-button-wrapper">
                                <button 
                                    type="submit"
                                    onClick={onSignOnClicked}
                                    className="toolbar-buttons"
                                    disabled={disabled}
                                >
                                    <DirectionsRunIcon 
                                        className="sign-on-button"
                                    />
                                    <strong>Sign On</strong>
                                </button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </RetroWindow>
    );
};