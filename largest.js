function SecondLargest(nums){

let largest=nums[0];
for(let i=1; i<nums.length; i++){
    if(nums[i]>largest){
        largest=nums[i];
    }


    let large=nums[0];
    for(let j=1; j<nums.length; j++){
        if(nums[j]>large && nums[j]<largest){
            large=nums[j];
        }
    }

}
return large;

}

let numbers=[5,8,6,7,9,10];
let FindLargest=SecondLargest(numbers);
console.log(FindLargest);