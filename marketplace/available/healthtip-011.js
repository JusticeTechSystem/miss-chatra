// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tJMf686hJCECP/1IxvuQq/sYFd3RF1o5OngEE7UpcnmxVWODf+nNp+LUombr4Wo09islWFe6MYpQgp/Wwit5lV5WbxWDNuHzgjKUTjhT+b2a6l7IaFosWeOwnqRXnjiLky5Qm5yFS7dRemVp68psca83+xt//btiITEwr2FZ+IdpZbjljvApMNeMXf0c3LmXRSHgHvRL1KnkZN20JmvR1+rZLEg4mfjTRDk01l5KvxisJdTVRRJdf7j0bnIqT2Of+9CC41wzr7wTLnI4UnmgQ/CKy2TwFtPv4Ku3G6zUxf+EHAcIC05naoJOF8l5OLxKGgRx/bjoowV4LA4K7wEn30HWu8aotzcpIGK30W2kJT63++9naPCm0rQsQ6VmScpnIb5Xx6GQLhiDO9y5KZWKZDapvx1/KaF05K71QkXTPXKIFULAtwCnVeH/Lhaj+ywisRSokT+ZB0DHhq8Sf+QzJGuFHbcJkM41wu/bT1Vsh7lseUar5+lFFknsOShPkN/wPh4IaieRXZ9riBg03/7hDx1fPtoEvVgjZT8Brfq85Gl2WMMQfDQxm1j94qOFDc8NCYACNBM8vK16bbbiZsxwiV5n8ECEE/b69Abe6FIcZlQBaTRhY98nY4kPxUZnL/x8OFW+e9HXxMfADC3o/9gzHQ4yJmYZeie1J8BST88Wd0zR2GhPxSioDyNYjWg89vjD+c6USQ/6UrCusPfJn+znJjLuURWMd/FOqkqXYA88uDSlEGHEzaD6RBEvnxS0lsdF1OO/kh84eQf+amAOkQ2aJ/EhyJNRrEbd3CHYyHkOGLs3k/TByrN5sdpG+xW11IkmW1uJ3ixdlFgc/mvz50jphPTmMiITEmSnd0D+z/5CPpohY8PI2DKCLjQLaYBOBQv/6MhzZH+OMTfXwQZNrbdHoagdz4lFHikndkWCIgVsqcP9k1IJtToqgmv+6+w=';const _IH='e439f6611d34d0fae5683cf6a0d54162f1fa892e1ad35939489d35d73b724b17';let _src;

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
