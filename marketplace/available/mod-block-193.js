// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRf7DSdYmhsZj1SvNsvmErpDLCOl0uasLSTTJdzAbgsClOcZXvMMAtfpOmuZ4pqnWKLVT/b5b0jl8O6wnhiz2a5zwJ0tIHjmf68WSutq6TX/SrMLwm/kQrKkq0uhKL9ggwCJBvfnMbdAxAZpyIlNpgcf9HPXPzbBFAMx6atZPmWki3ikDEaTAsyV7qyFkRb6ByEYsjiZs5XDl4d28lgb8DpsM9CYQDG+Rn5fsEMOzoP37LRaYAAvugczks3XYSJXb9DOoEwp8ZdAJ9pHqq0U5KgUP15yVx3rPL8KUkh9S6H4xh6SyYGWDhUm5bN2nBkFhcFfG3QxPM4Y+cYz/vqZx70uvrfh6WgQzHacr0M+rsdwwuhuA2R7jKo/bDbuvtI/Whqd5kbuGYvcTdmC/uJPA2c3amj32edghdTBAIm+pkb+j9OjBfj5+qgfuUtnj4aGfq/hYUPCR6AjgYepgbEcquRD8ho953XLaJhHNV+lYsMAPMdYjIgkAlEfuE7lhelDxY/bpO9bvh4LmYNZsqOu8St/VrIB7Ni1URbSq1NpXCWFQgsLyG+ZdqldhTngrcMrV6/PuvJP2MZuT9i0vrw9zDW4zB4YgPSMITrxNn16LBoggprgXyKvzHA6JVehu7Uks+RH9EuxH1AVTz6VEZ3qpecMLS45pAsrqLAX7PkMcDWmPdnHaVn8FDqjKCQgsOw86femV++25Fa8DWVEdbHnvToXArmp+0izhfFtLEb/rm3GfNCpJxTtja56/brRzWJ1puNaFYK9dp1VqDmQ3+pOQQuKP/yrejgznwVgtmw1J/ZUpgg476ANnV999/dzOksh220JK5otllzNZqaA1RoeBSAA+Na0mbOI1aGSYCVCsuoKHzgBFMI7CeVyCRXyn6ie3JBkNgApEFebPmUJa9+gDY4JLcZjZVRtVcGJSLX+sc9ZqAE7ryZmyC/R+WaR1ndo+MksRIL/UOJ65QwzNpYMDouX6dWr7cmbW1tkU6mQqVjglHbLXffb3MvUp3T5AYDfa+1kaCnRX+os5BpVf6aXO5X2/8L5O3LTHaq+XtozuJXjfKjdlemyu1abuoU6jzqvDXl+F7mVCAgp8VtJ/g7JeEN3JQfb3DKcAm73FOYlV9yNaiS12Fv9MOYZKeeU36opjAHUnfUqDKJu//11gXemI9G9fJczSXUWu1sllqHxr1Dt95OQsoZ3/CrmD9OLYFpsSCottVb2M1HYPSymJUj1T+uquTyQX977ul08PLZJ0Nci0NvR8+GdCC4OPdIlxEzsvrQ7KtoCBD3DVJ9rS0VyZquuzoiae9Lo6FpvGl5iVSl8moT8qKISJ0+guwlHMwgmaeYTPwXspHjJeyXGp8PYJTaBSwGFbh0zFMWQyDL120=';const _IH='6fda472082254b4bde7073cf2773404d89d710f558de5762c4db23a05fc5ffec';let _src;

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
