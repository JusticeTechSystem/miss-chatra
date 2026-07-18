// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9T05Zg+t60JQBh2dt6GGBi+0NkEFaH5sl70XrI0wM+oAMhoW0Kw0MdwDxKqqEj2+Id4KOzwcDR9zPXvS10RexnEwBQAESSNOEmR8igQ/YoBz+sbMHBCLM5+qYzOuHZXWW5Uym4rsLUoqJn4UwQnhwt7TbX/Lhx1woTAekGWLLnBA77WWMBtC6ehEeWgixHn8CHp3qwcY6SClgyKO/N0ox3noPjAxFFcdMSVE4SxP1Ivp2gIzjLks+gBmyIudQqaWPi7l8jVUf9qEC6lkCAixJOBsnhUh1iSON2F/UjVbctztkdFrrPsDUCQjK/ceajM37kC9g6YC6EQXM24dqxUp/5Db8gAAzpW3eDlFYgXixmAuzwbIIQeWBcoGW8BQ/iQnaJcFcWbSw4gkYm8e9kkBX4S1OPRm4K3N0oy6he3BnfVn3RGs3uOatmoQYx75DGLKVr5Q/kqQg03XdYb0KzbhWjXIokzchQaKd5qEazmuPHrEXtCOJmz6121dR9/T5bZgL/1W1kiA1bhx4sJwpzrGgQHihmolZAPMyd8YnPMEOnM9Sf4Y70mK+XmSOAeHd0VUxYO3KpptODJk9CpYJu8o72HdnqS+qgPvM/LYuFbLI0jk6nXsM4ziNf+le/ii3tkqHJBmYV7T4Ve/dmxfCLk1XgG60a4njIEy7N8UdZD1SDaPetyEky4e8xwnufvLxRXZEhqnZuwGLLxtpCGe8iDVCthRw4MWdFK+h53d3qnCEM6pojKQlmHZOKgqW/nWnCrQtEcQG8mjD9gKmQUwE9j9LSM5kZF9bQtiLpWolgBSxMJpMihQWY9aHujJcd5R8qNZQXmexrX+FjPPzAYMOtCGQggItNLpGmuqVNTcqhmTdKSTdalJhco9eGfu9qPTWFdhL/3W7+asM126wHk/scjik+hZKo6opa7jcDUbhRi/YaFWLVb4xjc/Q9xk7vmx3HpIoimDIoezjzyLiO43FjIT06SQOlxZ6O9Fe1HwW';const _IH='6da33ce1b98f3434431b20bfb82a2f66567ca36093d86b5ae1be202f589bffe2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
