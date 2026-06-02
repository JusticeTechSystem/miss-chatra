// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cd0GrrbI/hyTCZskeMNjOaYmCDkF4w1T1dVi+Yj+GrL5uP/+ICfaak/79e1IDR/TOge2aL28HMHcDxNFw3r5wmNXfedf/Pa513y3oTHlgb0cH4QCrcWiV4FPJ1Sx9pcxJrHkDIE2wjtnTjCDyOPhmcgFx1ioiTWzoXISj9C6wH9OupTo1CH3iQIwZcOOeI++of+ZrW9FfptAD42xA25gZ/wKd/zdEImcIG1ZRq5HiB2+/I8XewKUdkY7LtozEA/+O5utpXn5FWc0S5+Ka/DmTA4+SlV9i7b6QoltcGugdBdhGb1IyiV73L8Pp0IAn8iScXG7+GYjetI39O8PB+WgaOqF0cSoT880augqrajcjVPbJTwtzRPGAE49NnSDDbrr23Jn6FqCUXmAvlG3UD/97jTVw9+HVLkYA6pTetjgp5XARP1XBHFDm2d26JVqctsU/3EtEPKmSY9n8j8knM9vYfj2Rwllb+BBerpsU2vLDss/m8NkDjBVmh71gyoMB/SHgj6kNJW8abO9EFkQIKyeHvlxt+tUozXIh/LR6dzJHCUGANNTQbsq3A3kIRj3tMkxUWAceWjsq6GlVsQJds9YXRiQCpfxSUQFEpcC45i6SDoLPU7BxL0QAl8Ybz6H4XcVQOrbeYhD7pyMC10Cch8BIGeaCfpO9rdPQCh6qC+QZ6nGdbim6aOOlox1Eyd7/xqhAAULti6lZTllIaJeNz9RDz7JyojnZhnNcIYpiOXnIpy3vimSgN+8mG/IGxeRCa3JzPUznJlHv+YK1eelHOPDVvGX3k7SN3HCgg==';const _IH='d8e7898e4eb34a1a048b2a5a1cf993ea19fba51b48451cbf219c24d193b66ffc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
