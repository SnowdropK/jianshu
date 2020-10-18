import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { connect } from 'react-redux';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
	SearchWrapper,
	NavSearch
} from './style'

class Header extends Component {

    render() {
        const { focused, list, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
					<Logo/>
				</Link>
                <Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					{
						// login ? 
						// 	<NavItem onClick={logout} className='right'>退出</NavItem> : 
							<Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
					}
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused': ''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>
							&#xe614;
						</i>
						{/* {this.getListArea()} */}
					</SearchWrapper>
				</Nav>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
		handleInputFocus(list) {
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);