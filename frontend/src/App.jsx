import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {MembersPage} from './pages/MembersPage';
import {MemberFormPage} from './pages/MemberFormPage';
import {Navigation} from './components/Navigation';
import {Toaster} from 'react-hot-toast';
import {MemberProvider} from './context/MemberProvider';

const App = () => {
	return (
		<MemberProvider>
			<BrowserRouter>
				<div className="container mx-auto">
					<Navigation></Navigation>
					<Routes>
						<Route path="/" element={<Navigate to="/members"></Navigate>}></Route>
						<Route path="/members" element={<MembersPage></MembersPage>}></Route>
						<Route path="/member-create" element={<MemberFormPage></MemberFormPage>}></Route>
						<Route path="/members/:id" element={<MemberFormPage></MemberFormPage>}></Route>
					</Routes>
					<Toaster></Toaster>
				</div>
			</BrowserRouter>
		</MemberProvider>
	);
};

export default App;
