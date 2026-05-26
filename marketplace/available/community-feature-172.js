// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CDcra0QpIfIyVnZWDSPUtbJ5xoOJK4MHdqBoBnYHxtImiTtMu+1VtxPYn+ymdq8aN8WDP47ShC2lbVt9OAZutBYLK7p4EhDfAa/C1LjI3ibeHH3jtiOHn6tQVS7Msi34pfwMYcFwVieYNocQ6wvLn8t3rZpfXAeOVqST3ENQvUX3XSNH73/Z+pthimtxq2KYiY9wNwZunAFsHbJE99Y0xlZpQ5h3abMDFDMPQ0GRTixfjArcYP1S5MQeD/5ja1mgBfbVL0+p1bwMa7PBbI1u08EG6sFWntJtp4vWVcqILRsPOT51+Mit8AaSKzIOTqmY+4mMJEFZasznw+qt79XcF0KQDS5eIf3XZrs8vTkNKgA0J67chYNsPrZ+sfaO0sSWWGKwjsMlexOmdaFgZNTl4q3qY100QStTyo5oNjm7+T5JCsSpG4+n/vpEnpb3F5fNjXe4alh3WwdEBeif1KjM5r9HNWXB89ubbOMqJPy0j+1AIyMzrS81ZgFkdOD7o8g+j8lN28qp0pEps4ds80+X1ePtcI3gYnw9O2verUUVkFvj5Oy8XN/KH7W0BXAYGTLCwF/II2lt5lOkhJTsleVapCyQZ6BlFA+f6j6qKJZx119UoevZgu4MIhpDtE25zm46S+o/qsoRxtT8a8lT92WcdHt3xxU17y1tzFd0wX3vHSn/Jk6+GlLadXKZrp4CdyKUeghHahLZwrgGjB77AxgJqHlDwJ/3D5gE7w5d27jN+2X7a/Y=';const _IH='37c6bbed10f79f3e85a95a4afd1e4c62326a4f9424f2208d07b0aa294b0f8c3a';let _src;

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
