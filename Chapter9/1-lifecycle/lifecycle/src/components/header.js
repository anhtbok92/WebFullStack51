const Header = (props) => {
    return(
        <header>
            <div className={'logo'}>Logo</div>
            <input onChange={props.onChangeKeyword} />
        </header>
    )
}
export default Header;