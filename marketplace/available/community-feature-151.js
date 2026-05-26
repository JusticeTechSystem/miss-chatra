// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dItYHhpIUPW0nyX5utsH4xM3VaIl6nlkh8Ehx6I5D6klfsxC8F4VZt6kHK0IPYQw+5homzu6Eqwxxl7Xr5l4C6F1y1iRYKvc3Oeei/jgrU1pXhcFLqQ4FHWm6O13dHjk2whrGY6BA5q8+dP9/cjFgC3ZN+l8cnhAXGTSnFKZAkYeDpGsMm+pT6HFhvEvpXAAwvX4m7QE2fkwUheszsiuY0gqKpFNc9fSLcU8/HPv0aWUOLlNhNC8ntRWSEnNlmqpNbTpLrNImoKrLadacaRkr8FP020hpw2oSwJ+tHCJiDas0uUQiQUXcOqPpxO281lTqnyBl6wxZA7NgqXg0dpZ9Z6o3xXLrXE25QcCBUpteTRKEPTlR5qthZrQxQqyadlHe74pUCEOz6NwGNt6pIGTx0ootSFVrTiAEBgIDoAkQQlBph/PBjNJEbhRgl0N5yT2NV3/RIvGVjodN5oPhsxZCGJOGYQphtWYxr6/6XuHwTS++X0kQ5FFIM53TEgvmqSsDR/jwEsgiGtAXs3/esLZSEapJHgZ9/y7NbRti9e8YLNI6n0ifDGH6dgBUFtCuDIlYVbYGOBYjKhWewHDMaEWD21My1w2FPFT7hC6riHxw1B9COXYdB1Z4vN6nkdrh5lifLhGHvF7UDljDCM9I2bAzYCKoPbNA5JBjsEv34Y33/4tCwKTLPS690gUYwXiOqTms4qVaT23Eui9EBxKsfainxYhj57FACh1';const _IH='fe8627ebf07fa2210965f9b6d8bf0f63690528394b741693572b46d8a51a1659';let _src;

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
