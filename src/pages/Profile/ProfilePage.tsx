import { useEffect, useState } from 'react';
import AddCategory from './components/AddCategory';
import { getAllCategories } from '@/lib/categories/getAllCategories';
import AllCategories from './components/AllCategories';
import DisplayCategories from './components/DisplayCategories';
import { getUserData } from '@/lib/users/getUserData';
import { useNavigate } from 'react-router-dom';
import ManageCategories from './components/ManageCategories';
import HowToUse from './components/HowToUse';
import { Button } from '@/components/ui/button';





const ProfilePage = () => {

    /**
     *      STATES 
     *      1. CATEGORIES
     *      2. SELECTED CATEGORY
     *      3. USER DATA
    */
    const [categories, setCategories] = useState<TCategory[]>();
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
    const [user, setUser] = useState<IUser>();
    console.log(selectedCategory);

    /**
     *      NAVIGATION 
     */
    const navigate = useNavigate();



    /**
     *      USEEFFECT
     *      1. GET ALL CATEGORIES AND SET TO STATE
     *      2. GET THE USER DATA
    */
    useEffect(() => {
        getAllCategories().then(data => setCategories(data));
        getUserData().then(data => setUser(data));
    }, []);



    return (
        <main className='max-w-7xl mx-auto lg:flex '>
            <aside className='p-4 flex flex-col gap-4'>
                <AllCategories
                    setSelectedCategory={setSelectedCategory}
                    categories={categories}
                />

                <DisplayCategories
                    categories={categories}
                />
            </aside>


            <aside className='flex-1 p-4'>
                <h2 className='py-4 text-2xl text-[#333] font-bold p-2 flex justify-between items-center flex-wrap'>
                    Welcome back {user?.username}
                    <Button onClick={() => navigate('/create-blog')} variant={'default'}>Create blog</Button>
                </h2>

                {/* Add a category */}
                <AddCategory
                    setCategories={setCategories}
                />

                {/* Manage categories */}
                <ManageCategories
                    categories={categories}
                />

                {/* Short how to use cards */}
                <HowToUse />

            </aside>
        </main>
    )
}

export default ProfilePage
