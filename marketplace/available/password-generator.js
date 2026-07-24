// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNYaDlNmWZPYlX//oMe65IaTo7XU97PNkqIhcSgNXPoyQDQ5t7lh9cBEQatkerJLWfMrarvYArxMqfjZp73KbaPASPjfbCHcxAi39pMp81DSiMfnr4PLw2KjDl8bu3DCNYBw9QAXZyK75ai/I8N+Qz/83gv2jyu/v1mKONIemXIhj1JmJEb0uC4+BaBOuIk7JHwTiwDhsqzbXTFFFjAc2klR1rHcx7Yb5aQEWdoMz+UzXKnVn4vUeE7vWJlAysXOnedETd7PK61JO+vZ+UKre2IAYckbhRZazIGRnzaFMvQCsFehrctElP+lRIT8jW6Maif1OUOqR21ozpv9vXzoOkkV2dNL2Z0pcd4jAh5guUQK+cff/frzyKuY1xPsAZFY9H0GpJPzx+yOVAjuN+MiKgnZj38E+sqLCcX8f2tKyXt8vdloZsSjbz1eCgVN/udhcV6cFV8YNUZn/UwwjLx8372KRHK3aF84M/I5j1zNo5MJGYKCvYc7MU/xWD43SPklabUgO1gIHSKPsd9i8IJC5rTyP9OZfZH2SH+QaR54u8ewd3pfi0VEk3UfzAAJr9slgFvW51M93LoH06Z9Lb3+WTSQdVbstMQLNSQyn0QV1+qz2E/Ud+MIrTAzdiA0fRX0job8xbQZy6f2cDVdsjv/CkQFHMypDIvnz3mqW8IAsNifmpaHDj91ruXlsAXYbZ7YVpIWHwmR6al/IWqVA71DY52xQZOx+aWr/feTVgpm0iKsKX/WEji/yI3Rak87Wk2N2bJbHyWNrR0GQ1FSmOnDz2Ho69jbJTc+EeqbR90HvsAua4x/yQ/gQQlIl573o2Oyf8UnuYvX7iS7V3X2iWoCNin/pJ4PHCryF/IfqTWbf/VRZfHIrLTLatbZ/MD+IqGNT8+drUnl57cHyx7hh0nHop8/Mm/ZXV55GORlKbXIcRTzbFAQbaQYb/WlIiGGEkIY4mLhD0THEkS8s4BUNaDA8emxaDbXP+iRubdogNdddI9NMjDOpmOdiaomj14Gyo5o5pgndpdZeuaw9h6FL1b8DvN6m277i0KWEybasFhPZWXU+DcjA2z8gWGBTb728f+vXjYlHGKp4AOVyTz9n6dsFIlgLB8lUEnOfgmQ6z5HJn0MlZDaCvHE/wSCjtKoU8q5xpu13Gbr+ohPQrABeBwExKYuXFj6Ri+FXAivJ3OI60pU0zzcuxodMp89S0lqFshtzbn3HmDz+4GGB0X+QSw33nbfLPd46KYo2hE7OW3M1EBxAXNiD2d3eHBc3E+tOy0vEMf6JSTSAPeS/u2s7A0FlHf3JQOW38Wk+bcxbSCq25I+bRGpjZtuqpe1mxcAqWObaHU9PAsqa86KlURyGUw/pnFufMS+I5cZX/blarMMprgNPxNuDBjbY4XbR0CbxlrdiPjMOA7ON5Q7H3Oj5fvfBooRx9ctYEXM0iJh+vZvktGZzAcTjtJk9tmKhzLW/FZwMBJUiy14RaNr7PcNPrANsaTTFHXYVjXqFfcSpDxaIMe9wAxtPgI64JwsIm5TqhFpiAqbZpMzFUFGWI6OXIU+BhKr/mCbATSVqzVMiu2OyujG8xKKydAIe54pf7ujU0NvV6Zzt1jzWGkBVJAS/a6MBio0zNu3C2KFcCxVI64mTYEw6oYiTF00dMiT1BqWLwVf3r9d+mZZVs9E2fLS5rj9EysrhnyP+PEVgeYsPiZJr6c55FMT/ME4+IVCRJHlrSP9FaCLtPEvBQ11u5BsKKquvzaEO2FU05zJDchssBJY54Yzk=';const _IH='88fc29c3041292a1a6f8ab623aad21506199d699f440fe464898d1b3d5227b54';let _src;

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
