import React from 'react';
import * as FcIcons from 'react-icons/fc';
import * as AiIcons from 'react-icons/ai';

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'January',
        accessor: 'january',
        Cell: ({ value }) => { return ( value=="Yes" ?  <FcIcons.FcCheckmark /> : <i className='text-danger'><AiIcons.AiOutlineClose /></i>)}
    },
    {
        Header: 'February',
        accessor: 'february',
        Cell: ({ value }) => { return ( value=="Yes" ?  <FcIcons.FcCheckmark /> : <i className='text-danger'><AiIcons.AiOutlineClose /></i>)}
    },
    {
        Header: 'March',
        accessor: 'march',
        Cell: ({ value }) => { return ( value=="Yes" ?  <FcIcons.FcCheckmark /> : <i className='text-danger'><AiIcons.AiOutlineClose /></i>)}
    },
    {
        Header: 'April',
        accessor: 'april',
        Cell: ({ value }) => { return ( value=="Yes" ?  <FcIcons.FcCheckmark /> : <i className='text-danger'><AiIcons.AiOutlineClose /></i>)}
    },
    {
        Header: 'May',
        accessor: 'may',
        Cell: ({ value }) => { return ( value=="Yes" ?  <FcIcons.FcCheckmark /> : <i className='text-danger'><AiIcons.AiOutlineClose /></i>)}
    },
    {
        Header: 'June',
        accessor: 'june',
        Cell: ({ value }) => { return ( value=="Yes" ?  <FcIcons.FcCheckmark /> : <i className='text-danger'><AiIcons.AiOutlineClose /></i>)}
    },
    {
        Header: 'July',
        accessor: 'july',
        Cell: ({ value }) => { return ( value=="Yes" ?  <FcIcons.FcCheckmark /> : <i className='text-danger'><AiIcons.AiOutlineClose /></i>)}
    },
    {
        Header: 'August',
        accessor: 'august',
        Cell: ({ value }) => { return ( value=="Yes" ?  <FcIcons.FcCheckmark /> : <i className='text-danger'><AiIcons.AiOutlineClose /></i>)}
    },
    {
        Header: 'Setember',
        accessor: 'setember',
        Cell: ({ value }) => { return ( value=="Yes" ?  <FcIcons.FcCheckmark /> : <i className='text-danger'><AiIcons.AiOutlineClose /></i>)}
    },
    {
        Header: 'October',
        accessor: 'october',
        Cell: ({ value }) => { return ( value=="Yes" ?  <FcIcons.FcCheckmark /> : <i className='text-danger'><AiIcons.AiOutlineClose /></i>)}
    },
    {
        Header: 'November',
        accessor: 'november',
        Cell: ({ value }) => { return ( value=="Yes" ?  <FcIcons.FcCheckmark /> : <i className='text-danger'><AiIcons.AiOutlineClose /></i>)}
    },
    {
        Header: 'December',
        accessor: 'december',
        Cell: ({ value }) => { return ( value=="Yes" ?  <FcIcons.FcCheckmark /> : <i className='text-danger'><AiIcons.AiOutlineClose /></i>)}
    }
]