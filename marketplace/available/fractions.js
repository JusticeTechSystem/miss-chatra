// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2pjoFJ3Jct3ezvoZAEZMynmj0ri7nkUE4gj7uOS0nWvVj91C934UlvEk60gmoptY/zJeB0FBsvnsFZ4P1e/iNT59SUHTdyeAeg7CfNVyju1udxnD4UulVaEcbV1Rwm9fG+XkL22VdF9pac8bC8W3fqPn9BK5m1TWPptE9B3KEihg5tqgqoEVeKPp93v7EIZidIi2ELvupMqyeEbFSltWUPGkToHeiM25x7LVSJTnKIOZ1RVHtefYY+jBV7qlAZ9lEnHqBGuOmp+jlsfx0HrP54p0bwnujfXaHXGkx2V7ZvyFu+LKbHHn5lLB4yi5wIQzDS4E/AVEQuzI08zWmHrMYxeDhVQTQ3Y8LHjM/b/l81jVK0pKez5C/SKidhUrHIdgP2MERBON46IfT/dCJVaov0BiFJYXzwgIso6xOXDXYsnb0KkCNiFysiGskWtO1Z6Nx6cW31wX8dJSzufZ4rwfZ/3t8neqB8TuEbwmHz6fMf8GvPe3+QHFPLg093j3mgWHKwfSpWCrjQzISRzTNaJB+4hC4qkTXoxg7f6mm1V37T12KNmvU3ml5lRcneHljJBdFK3l0cTbvcBVMyi6bPa5QQIWK2rFleby1F30DwAFEd8UBiVfSohFUfLIBCRFosV39MhWehL+j/EvbqOGyt0eeS6O9EfZykVdV6zAR3TMsod5UrmQgm/6JuYJ522Xuk8hQvTF6HN8YP4rt+wziog5x32oUrF+OScTQdF/p5GBRwC6gS6l8Rq+gyCsjaxVYBY8iJ73kodE6OGPxA99v43U7KkBu+9EwLf2BcWRAx4TPjLe2FTYh6qIVe5gq0Lgoyc6a1Ry3Zf1yVfiyFYeDgol8RfQksLEyjw82hee12CN+eUNKucRuYs+kdCJ+4TtghbdNSUcE8KZxuw8GOU0unOqrRQjq4HOGU01wT/hGT03Z644AT3PAvf+ZVcQRJOhO6W7kGrcQiprt7AyXHlgGmyQjylAuSxBqMQAMdwqs2BKMu39NZx2ZUO+vtNj+ELGZfesMy3ehg8zOdVD1eEv2tZfTB15v4lIDOquOdTBO/0Ew1FTog5bB4b/xGnkHP6FwG/qVoBlwlx8LjQ63GInvcoi546TVlm9Is1TjcKgKYd06cYVoYXNPyLdmWH9FYKas2V4SR0wMY4+NCVb2qtACYUi3/dsiTJYbqNQ5kZYAh6l+iwvxKNsY6kcY5lCZcXFL2YxCqiPippkxxzIsGUfHVsZeLtWtn3d1+LYb5D5uzR3w/EZH4HNLwI1wkL2dCGOtKULhkJq0XXhyF7Ukh9fv5M+IbJGTTsgAmIORMIfGzjPtPsKvBPt9PE46FZzRn88tJpKpUJ7oGH+r8werXxpV6luXk7b3LgKHZAPArVb0HGzvNNGD9Ep3KlUBUU5+aDlhsJOzxoOkqClF/hfMYkkz3KGBb3FwiJ95oKvp1MUcmSFILt';const _IH='e0216aa8c47fac3f09023efa79160d24c04ccf2357826dcb26805ccf7b7528fa';let _src;

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
