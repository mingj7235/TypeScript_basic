"use strict";
/**
 * Inference Around Functions
 *
 * - 함수의 파라미터를 저으이할 때 각 파라미터의 타입을 지정하지 않으면 any 타입의 파라미터가 지정이된다.
 * - 함수의 반환값에 대한 타입은 return 실행문에 따라 타입 추론(Type Infernece) 가 적용된다.
 * - 파라미터에 타입을 지정하지 않으면 일반 변수와 마찬가지로 암묵적인 any 타입의 적용으로 경고사항이 된다.
 * - 반환값의 경우 return 구문으로 명시적인 타입의 유추가 가능하다. return으로 유추함
 *
 * - 파라미터에는 꼭 타입을 써줘라아아!!
 */
const findArea = function (width, height) {
    return width * height;
};
/**
 * - 함수의 반환값이 없을 경우 void타입의 반환을 정의한다.
 * - 함수의 반환값으로 정의가능한 never 타입은 절대 발생하지 않는 값의 타입을 나타낸다.. 오...
 *                      => TS 에만 있는것. 즉, 반환값이 없다. 반환하지 않는다.
 * - void 타입은 변수로 사용될 경우 undefined, null값만 대입이 가능하다.
 * - never타입은 어떤 타입의 변수에도 대입이 될 수 있지만, never타입에는 어떤 타입의 값도 대입 될 수 없다.
 */
let accountBalance = 10000;
function overdraftError(message) {
    throw Error(message); //에러 반환 throw는 return과 다른 개념. 반환을 하지 않는다. 그렇기 때문에 never를 return값으로 주는 것이다. 
}
function withdraw(balance) {
    if (accountBalance < balance) {
        overdraftError('잔액이 부족합니다.');
    }
    return accountBalance - balance;
}
/**
 * Array
 *
 * - 배열에 서로 다른 타입의 요소를 저장하는 것이 가능하고, 이를 타입으로 지정할 수 있다.
 * - 서로 다른 타입의 요소로 타입이 지정이되면, 해당 배열에는 순서에 상관없이 지정된 타입들의 요소를 저장할 수 있다.
 */
const myAry = ['typeScript', 2020];
// const myAry : (string | number) [] = [];
const testArray = [];
testArray.push('Ecma');
testArray.push('Ecma');
testArray.push(123);
testArray.push(24);
console.log(testArray[3]);
/**
 * Tuples
 * - 튜플을 이용하면 배열의 요소수와 각 요소에 대한 타입을 지정할 수 있다.
 * - 튜플은 정해진 길이에 맞지 않으면 에러가 발생한다.
 * - 배열보다 조금더 strict하다.
 * - 하지만 튜플은 길이에 대해서 push()함수를 이용하면 튜플의 규칙은 무시된다. -> push() 를 통해 강제성을 가질수있으나 tuple은 제약을 주기 위해 사용됨.
 *
 * - 배열과 다른 점은 '불변성' !!!
 * - => 서로다른 타입의 요소를 갖는 배열은 순서에 상관없이 데이터ㅎ를 넣을 수 있지만, 튜플은 배열과 달리 정해진 순서에 맞게 데이터를 넣어야한다.
 *
 * - 튜플은 배열보다 저장되는 요소에 순서와 수에 제약을 두고자 할 때 사용한다.
 *
 * - tuple은 사실 잘 사용되지 않는다. 객체와 클래스를 더 많이 사용한다.
 */
