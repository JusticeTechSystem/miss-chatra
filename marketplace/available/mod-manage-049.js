// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jELBoO/EEAUJ96zKUf2EL0TvAnzodVjN3HZdrZ7QnzuGr5FT2eiiINqU2p9khz7ArxueqD+CJospPrmt24SjMKPJKS9HEN/bMOWZaKLptzqfgsqlxGq+0/n8XxWnBD+tQ8RbXnopFaMv/v3aduZOb9cITMIS7AiZqnFkEcJQCLaW6oQXFKj9EFM6EewlA90gch4/rURxz3NT2PbVWRKj+li6XtzzOWeW9v1EB56CuWuzjW/89h6padXeei5s9TATtvw8Vv3mh0OgAhAMk7vYSUSdVtef4EP6V3Uh+esBSYjf9j4fvOS4qEFIF30hE43varUQhZ1BnG2x/4d/WWJAT3znL4gg78DUZRTVZBg69rOd9YNlthu5xhxNPPxYw/LBfjKUNdEOp9RrbhWFWYd4WtvfxnZPbPUV7YEar1RqMDwBOTfOFXcnM1GlJGKyu2WttwFrhlxZs+/A57nPYQx/5mwno1KTcIKmDtXYFPM45J/YCcdmBeS+pRgK0R0tbON/cyFqUzRR0S8+jY29IlfaHRPwgXAGHZwXE7JilRppCZzx08XEQx2bo/xoIPwWd8U4o/kYVnNvvNu6TdFUG5W8DRs5x0DsZYkq8P3h5LnQCCPL2XjiNDzKCr6xATpHIg6Pb+4XjSyA30SGQaEg+8H6rXxJ3jAS79ag/IHompN/PNDQyyJDDM3o0iVuzJRnmsDzDLeQirCdarXvEJEmd2A5DXtHAmrQFZ0t5Zx27DRWA1VCwgZ0cPNIoUCRkoPMnpMn7AwBayq2B2fAU3k5HYOjC+LYnVXg/SjRpgE8lfZM+LoxUA8ZoeLZev8pSgk66GW0kh3IJH5DIV1j3JnK50UH7Q2KgWok+P7WImjVgf3toRcCtvk2ET3aDTDh63iqHgFCGk0E+1P6wcQ3IxsnDfBR2zzowd9vA12jI9lchZOtJRuWzQrhfFQYAaGlJSsmZe3+Ti/zJW/XexWTu+No3xYMkXH1kHkCmgw5FfWkF7STd8A67tY/sq5SDLsAzOYHg3+gU/RQ4mhxSJ0ZR3gVvmE7IqD0HRPGJu6XDf4AbjmEuJsryxuS/hgE4CKsY20F/DA4KaysYl971RSl4Uy25msBbsb5kwAvAEnMX4ydhXZ4Rz33o2mWH/WNC6Ps+Ktlp2ihwK8cloQRXIJyaHekxQoGgMRWF8cQ+oSSkvzPYIe/uHB7hvGl6q4D9sYScoRV6qGPKbrm2saOhohuhuCGp5oqizR4XPASpHPmeNMInvIowgZNfbSG+n+eN5TioVgUz4YNxwsswSHED282S6WQ2lgjj/EmY7FEowaBARtJjpXf4nPTh4T/qK2togewwH/vTPnG2Eeo5/MTg6l5ZwHo8u6JOkmzIflIxXhDztgNrq/8juGd3s0=';const _IH='69a634a86c9881c735743cb906d52b48d1a5bd5afde98360a6efc976b9fd9aae';let _src;

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
