import React, { Component } from 'react'

export default class TeamsCondition extends Component{
    constructor(props){
        super(props)
        this.state={
            items: [
                {
                    title:"1-Term",
                    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id gravida scelerisque eget. Purus fermentum aliquam facilisi faucibus. Viverra id nibh sed hendrerit a pellentesque. Ut vitae adipiscing viverra non tincidunt pulvinar consequat ac. Sed libero pharetra, parturient aenean ipsum magnis tellus,Integer aliquam enim neque, sem vitae ornare eu risus. Neque aliquam a in et in tellus sagittis lectus massa. At duis nibh amet, amet mi. Malesuada ornare vel vestibulum mollis urna, fusce sed urna. Quis tellus cursus faucibus at auctor mauris dictum. Et quam sed senectus enim et lectus. Aliquam, mattis in morbi vitae etiam etiam. Ultricies mauris, scelerisque purus etiam integer. Ipsum at convallis faucibus nunc pretium dictum in sit. Tincidunt fermentum in adipiscing ornare aliquam.",
                },
                {
                    title:"2-User Liscense",
                    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id gravida scelerisque eget. Purus fermentum aliquam facilisi faucibus. Viverra id nibh sed hendrerit a pellentesque. Ut vitae adipiscing viverra non tincidunt pulvinar consequat ac. Sed libero pharetra, parturient aenean ipsum magnis tellus,Integer aliquam enim neque, sem vitae ornare eu risus. Neque aliquam a in et in tellus sagittis lectus massa. At duis nibh amet, amet mi. Malesuada ornare vel vestibulum mollis urna, fusce sed urna. Quis tellus cursus faucibus at auctor mauris dictum. Et quam sed senectus enim et lectus. Aliquam, mattis in morbi vitae etiam etiam. Ultricies mauris, scelerisque purus etiam integer. Ipsum at convallis faucibus nunc pretium dictum in sit. Tincidunt fermentum in adipiscing ornare aliquam.",
                },
                {
                    title:"3-Term",
                    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id gravida scelerisque eget. Purus fermentum aliquam facilisi faucibus. Viverra id nibh sed hendrerit a pellentesque. Ut vitae adipiscing viverra non tincidunt pulvinar consequat ac. Sed libero pharetra, parturient aenean ipsum magnis tellus,Integer aliquam enim neque, sem vitae ornare eu risus. Neque aliquam a in et in tellus sagittis lectus massa. At duis nibh amet, amet mi. Malesuada ornare vel vestibulum mollis urna, fusce sed urna. Quis tellus cursus faucibus at auctor mauris dictum. Et quam sed senectus enim et lectus. Aliquam, mattis in morbi vitae etiam etiam. Ultricies mauris, scelerisque purus etiam integer. Ipsum at convallis faucibus nunc pretium dictum in sit. Tincidunt fermentum in adipiscing ornare aliquam.",
                },
                {
                    title:"4-Term",
                    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id gravida scelerisque eget. Purus fermentum aliquam facilisi faucibus. Viverra id nibh sed hendrerit a pellentesque. Ut vitae adipiscing viverra non tincidunt pulvinar consequat ac. Sed libero pharetra, parturient aenean ipsum magnis tellus,Integer aliquam enim neque, sem vitae ornare eu risus. Neque aliquam a in et in tellus sagittis lectus massa. At duis nibh amet, amet mi. Malesuada ornare vel vestibulum mollis urna, fusce sed urna. Quis tellus cursus faucibus at auctor mauris dictum. Et quam sed senectus enim et lectus. Aliquam, mattis in morbi vitae etiam etiam. Ultricies mauris, scelerisque purus etiam integer. Ipsum at convallis faucibus nunc pretium dictum in sit. Tincidunt fermentum in adipiscing ornare aliquam.",
                }
            ]
        }
    }
    render(){
        const { items } = this.state;
        return(
            <div style={{flex:1,height:window.innerHeight,alignItems:'center',justifyContent:'center',display:'flex'}}>
                <div style={{width:'80%'}}>
                <div  style={{textAlign:'center'}}>
                    <label style={{fontSize:30,alignSelf:'center',textAlign:'center',fontWeight:'600'}}>We almost there </label>
                    <div style={{display:'flex',marginTop:20,alignItems:'center',justifyContent:'center'}}>
                        <img style={{width:50,height:50}} alt=''
                          src={require('../assets/Document.png')}
                        />
                        <div style={{flexDirection:'row'}}>
                            <label style={{fontSize:20,fontWeight:'700'}}>Term and Condition</label><br/>
                            <label style={{fontSize:12,fontWeight:'400'}}>Last Update 12 May 2022</label>
                        </div>
                    </div>
                   </div>
                  
                   <div style={{height:window.innerHeight/2,width:'100%',marginTop:45,overflow:'scroll',borderTop:'1px solid #E2E8F0'}} >
                    {/* <p>data {items}</p> */}
         
          {items.map((items) => (
            <ul style={{listStyleType:'none'}}>
                <li style={{fontSize:14,fontWeight:'bold'}}>
                    {items.title}
                </li>
                
                <li style={{fontSize:10}}>{items.desc}</li>
            </ul>
            
            
          ))}
         
                    </div>
                   <div style={{display:'flex',flexDirection:'row', marginTop:'1%',alignItems:'center',justifyContent:'flex-end'}}> <button style={{width:'9%',border:'none',background:'white' }}>Decline</button>
                    <button style={{color:'white',background:'#F15A29',width:'9%',borderRadius:4,height:35 }}>Accept All</button>
                    </div>
                    </div>
                
            </div>
        )
    }
}