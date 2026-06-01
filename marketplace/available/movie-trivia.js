// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6fPntUoqVQpWF14hFZNIl9rjbZ0fHkpymwUDuhbZ21hj4DWLCkevUk97hBdx10mwKDq9EqMyWI6Ve8XFddSdzmuY/vwpiYggVjEucqnfAXrGbgw7VDdh8je41fhVknEkdtJXjjOe2vjxxwwkni4Uw772cRFKh85VieOC/Gzel7n9tv02EajESjxm9oaHvhwm/k9ZYi7gr8qC7+n8Ycyu/3ZKDkPjM6VwTP8XkYEQmskHANFqm9zLRCRqIxWWP+4IQP7EUhsPSKkHsDaPDGxciBWVsDhUxYwqeE56xtG1YgG4nAPHSuZv/NR8lL+zVAxheBB9aB4GOeS0SJNd8NYk13V7Pvlm3Z10yr5TaksA6la6As3StClJO6fjbEzvOw5sRHS98DX7vdE8FhyMLirXIozQVW6ZqdPK5dg8fWfyxws9rIMRKW4mL/80176SIItC+4FqYqM3jHCf1/dI3JjxzCZRtgefSiYZeQ4lomzJD9LwzqcOAaj+FatfnjlGkaOUvKSYnxIoFoHK/jT45Tt6VY30ykJfbMY+sEoD69ipUDv7Mbm052nRKbA1zb0CJnlCCka7k0OepudtGxBncmoYnU6kqEooMMFBGLvGu+VN/6wsRLw8PxAQy5Nt0OG4ZtfRM+b3+9Q84vseUlrBUzACWanba8nqmMz9zaqXLiVVfP4BHgMHTXyfKSLvC6wCpjL3XxMjTBqGzQB5qX0adqqraBVQYGG/jDGYz/BMMr6lWMbDS2enSZZsqa1M8a+I0xVvKt+3C+6x/5mbeZR+Z6XTmIaEpzHp1/hu8XDW6WjvbkIYWx8BpEcgdzV8xerLScKFR33gRqt5G4ip1S9FWlzSiM/BiyhzO28kSsnZGI2f/XW2qh2qwYi7cMHjOw5rY3eKLW+0LRHsOhAPvRY1I1Qzj6sbH+Aakc/YAwSb0GW5vvN2K/dhsgLAn+lZP5J/Il6dgRlMYuL0u653j7wLBBT8Hc+BEeBZjgW0KAIRUqemEJqBlGk8ySjWRIoWIoAhVhu2RaNNN1Ly7WNvjKJJkpHB3f0ldO8SZU2/nlLr8e+WI4VIlUQAyuITHvpydlieO84vw9Bh6jgupiQ4raECaLsRohk1lZNOsjduJnrSlDpwykSlVqGlyHQs8neGa96IiCBQn8HAC2e20SgcoUVWEOq6au/jr/dQXIAtyOG5OFGWjXVjRP6IzsbbsQy4tSTGNhipBEuBLkftl8zLebL0f3znVZMb0gM8VsGZD+iHvToxyXYgvIgejoKC464PburYvlXu7+aexwKVFsi7bKi0dhWTdPa1CzXXufQ1OxZjxnG8doPY/heWjwgs72Uzi9zq5u/yBhaNimge1B/q+p6H5uIvTBWDJ5ieUGdWMVlC6OESb0l9VL/st9qwzOmQMuogEEMQwbTQXggHD7isnZxTpKmBjeTsB6PHAxwckZML6KWgkwTatpWcxvR0R8E0YG7b4g5r3lpB9rWx2ik0XlblrZlZGXDTI52REIAr4QIi4f+rKCR8m/7uitF+g==';const _IH='0ce897b73bd1d257f9a6ef8b2a9d67c7a635caaad9d6a815309b0b96393cc7c8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
