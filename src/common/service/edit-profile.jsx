class EditProfileService{
   
        firstName= "Petey "
        lastName= "Cruiser"
        role= "Web Developer"

    static editDataFrom(firstName,lastName,role){
        this.firstName = firstName
        this.lastName = lastName
        this.role = role
    }

    static returnId(){
        let data = {
            firstName : this.firstName,
            lastName : this.lastName,
            role : this.role
        }
        return data
    }
    
}
export default EditProfileService;



