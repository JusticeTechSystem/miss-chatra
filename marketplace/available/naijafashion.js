// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT60vssAICX4nfcjR6QyFhTcoYFCMoSGaO45IiEEAOfNXqETYL92U9rkMShsxJY6e01L4kcL1QTnhKTQD/nTmVx5Knj+3HVOs46cG+haqjHKaWWvfu3S5UqqxD/XVLy9mkwcwM0uYBlYZdalDsnna8z2h8rvG+BkwjLHs1FUZ5eaV/7C3zUOo1HlIjnIfJ4fB7ws7KbbKZIu6VXk1zN+dvgf0lPUkmHKP3tEg65XKl0QN5pqe6tdXV7wbiBftQ8ZGNFvxC/cPNRE3NB8HKDW/0gXLuVkpqb72tv3W5I3im/Xzi0dGvmzYyq6KSuVXmvih8mB8tHFkD2Wbg0Qz5bjCiezOYZGmIQvSWK29FTvnUUgUpmmUGh53H22n9x2YpAuh2w0SKH4RIKACnBs29waJd4U7hAgVAk5/wu5SrgYU7/Jn6A4hQVlsoRseaBB7GN0VtEPFdFPCxYTDyGytYxfVkdJk2eM+fKT1/Iu1cOpnA86Rm3XKUnrormTkviF+WtDWv0ghjFN9VcfLXVmkebX4YHqp79fDjJIEaS35Pph8PuEKobuk5FfuZZvnMfSnK1dJZCmLzGRmTXTBmsTj6tmaqegE+qnQct3eMqegPN65YIp1KHAA0Ev2z3+mOMTwRQ4xltk69x052TO67SKz5GRNP1SfC2wpGTQ5b8BVVbJPhfRutUSnhD0JOgpWCfS50SxUwcWkbqoTu342dasDxEJiE7cocAqJBGETjFuSwpIkkXgoK6dNouROowlpjC2jE6fUlbPZPPuGTEnfCKSqiSWhnlAzi1CdOJNkAszKmqGFrH4VWK2RcFbTEMNrgB1gy8r4lY5ZqBVMrQCM/6UVODKjAWEFwEmkSEFB8ZnD2mW1frwuaCIguiSF7aBHiwPuiAQqmrlALEI7AX0uv43y88LLbUMYtvRHNyLOcCpjdF6R8Kh0ILOm3wPJPGCKe/q7ZDSt0ku1VZgJC/vL+aiAYR4rCOx6vT54oEUiRJ/qEEnNYVgTyzz6XYU2sNBu/yuIr8ChhwX8/UIl+nlingc7Fsaumd4+ygJUXqmz+UsGGX1l8GK4EGEsZ6q0PEChj7ih0mZkjO29qOI959geUcnrUytUKAY7Wti2V8SuG5dFRDdn1YOlwlANQ/iq+QkZQxoytMp5RydHfuzc5p06CHcUQiPISAE12ECfAAWa+w2QoobEEs5VjsT0d7HVP0yNmPToPYQModl+SZrjdaW9lveaVX';const _IH='6ec855d737256f061f0343381eb53016446b256c3538c56307014f2b9800d7c3';let _src;

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
