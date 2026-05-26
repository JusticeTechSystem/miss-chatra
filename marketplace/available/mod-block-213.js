// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='moiYVAvGLl6zwqCtvrcGb32Ca4pGsuokaVaOTEr6qvJQ9Kfvn2oHbqNjf2oTVKFiAThOZed/1S/6NkwxFa3zpDtebxBP6y2uWZJN2soKdUdqxP4vpAwhA8hRukaN4kvyDTH1OGa0Jiq7lUwd6/DKMo7wQz4lgvbyFzHtdRBeoR3hnC339MbUXASdUYlUjT0kTzO2LjnKb6sgrkcEq7/MKupK408Qc3KxyxNAcOxkL7WSuUq2VKbxQhZRBbhpvmVOMvNTSH1t11bcdzPzVI38/5kc/MM35hrcH8aKICIe3JzQxbnn+anElYr0PWOzKGj2b2b0umiBJMnnvp05baSuct2utSpNUMvvMKswxBy7s8IM8ufsjH5y3RTSjE6H2ALcLnej/BvS25XFRFd7hOa2w1j2+rmJEupnvz14ia7GbrcZb+beh4Z/cXUjX8IrqCW9cL3ZMZscjaUGZ3sUsLG5bwlvXSnUITHtJ35ICVG0m5YM7I5puuoTkDmJwos4JloHCDXX/+q/GnjdEoKCxbhho/T6Kgj7Q6pf9l8sXjEsuUdzx7FfhrE6402VzM7CGIzlYs2XM+q5pBbqIF1diX2OXc767hJtnCTgAUTc5r0HZpenf7RB/SWS+uzn2pxLp6+/+eZGQbHujrhpabyMDp2JxWDb7VYTppV2QZl4/2aYcsiUxi+rHHnV9zrNtRYPf4yQrqpamYtJ4L277/MePeBBDnch5y3+1bsvMPhWiKD/gvATIz6ZdsvCiCJM01eFzRpziIgjUCBJGdnF8+V63z3AOKRk0VGq8cBpl7VFdxeRP2RbWq1ZHcC7d4wNYI1nWV/CP/YzlCoWj9zHdiujQwJaEF0Lsnem+zWy1JpZ25Tsk9o8w1BYrveQs3tzMlrvdKLJfTI/lDIRvIgT1cd+SgYq7g2HaSbBvLdHSYkMkrl4zwpMyKcvBb4SU5CsO3wEH9e9vAZgt0vflM21YP3gVh337JJ4MHvxp65C0Ja823IAtv56SaytTEUC+mU4WSkjEIVm3eYeLlwaFdIYbTy9/grkfTImwmuZvjyfBQZg6KPqmw4ZGg8uig0acnVEjcGFwhNnLC3TD/kaTOgCKOZcOVzGJQ11TuAcRNOCv+BRZ4OonSsQh35NUWnB0edypFD9XwJ2ukMX40peN4g+bWOrBVbFxhv8XsTv0UTAVp4m0NXqQwFWmIXeVDjGH6gp12Cv3EbIncIppOmorooynuCc/lmnW+E0HyIJoWJ4req24cyDZV8vAIesJizvAzhfGp2WNC+o70Q9XL9f4M2+Q0q6Vv+j4nLoeFrAOmGbHCce7et9xRltbUMM7gv6Uj58cp5mdAgIol4CX2Vpkkosh3aR5vF4RSPJNK8qy6hAKVx35Oxi';const _IH='d890cfc22fabb1e2c2030115ccb766c52187ec51a4ee3f41e446022542ca9327';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
