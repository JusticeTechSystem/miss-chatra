// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dCe7FYgf2bxVCtqtTFKQ2PZi40PVd2yAfne9J8L4z3t5PlGSzcbLoE3egXPRxgoBvID221S6LMAz77e86y7blMpDdj9D8WwFhFqlRefZUVVnzjzsrA6jAD2Nwro0+ArmucfArrKiJj+W6vxQvOdOEvP0FxPdZLigKdB2X8CviIrGTGis/3SeYy7pB6nNSOLnn52cfNR9liYcB2a0WD2bGlT98CcP7cQjTGhOQi1MuB1sZtpmX66vu/u+ymHGzKw7GN9nR0N7Ic5nr9k1tQ0uJcNeuL2I8BcNxJoZHxcUJ5uVGpD6wr9VhspJpqmLLRawqBTcq+wcZfGgJU7rKSTiwy6g2BFPp/uNiv836bbMWGMr0X1XfTghSeNAzTysXu2q+e23WT6QVoksY379gqV4xx3qN5qKDxZp3Sa6gXSXFlAammdRPGmy4/0FwXK1p90GuWK+OPnc8Ml0pnNyjHgQCfKby5H7fY7wFco5rDJnvgNMlvTfFbp3RfgxeuuCpUoSTZnMGQAAVIUd8k1ometCmVACey+6YKtHSyMj3m8OF0pBinjIZSDc/nV0aExciQ7w6e53H0dpObs7i13MlBeDVQQV8J4eRkBBY+oCpFTnDVHS+dCnBYQSTlLNtnKcGatHf2Xxj8V5Ro08U6pBwNkZMxuGXHF3L/Sm081a9c/GlGbwllmUeXc/jGSW8q/SPQmMWHBA6DCWeR9gLiRPDQ1Hd3UVe3ojP3r54Zm5vrnY/W0+ecgpLuqRActqPPd6W9UF9YaqbtjHLekzIEhEGZ2/YnYujhfRGMwO1flATkgNBj0yy3GPg1dlEOEURxm70ErGSZkNYArnE7YqjEY58WAv/QteInYcm+AeRcJxahZFWUPkEi/gL64EPxZ3XzJebTDYOnWzdPmTL2T4OH2O75sKoA7RBxwjJa57jt/ywHc1LCHVJW9HaDKNCA6b/KFfJ4AZjrNcgYghBtzuFBBxmK99DD19rhVQmovAJf/VF5nkV1dLsuFD5GEsSfWzFSMi777yn+E4Kl93Ezr5Gep+vEHTzblVRPLjjp3+TSTLQD3hqignYg6fA5VcIpt2TQij6Bg0hM8Iqi4rDxfORJKxCUpUAQW6rUM7WBexAm36iFYefhpiw5Jm6ghpupsZyrMH7SAL7tS09vxnUV0e+nMY4+J8oQ1kTbElXnNKnGBbTPfk2/PUiDWviZAE7oJNx94Hxf6ceV1D8f97zZmK1A16QFj04qCe6/aOMfH3azrV1RpHT89tJAMEpuNJsCo7cPv7FrUarJCBk0wrPuX78Xf3PImP+CM2PW9gC7YkDby9KGLTDsxiOjW9M4CDKX7+4O1nKHJdGFscpOqF5F30GW/fOgIGW7PFzOrKJfBXprwKWr8wl/tjiO6nw+lR8A==';const _IH='5f4d547897f333ff0dde2a3eb830f804e77e9f96066b020bc5a581c9b8466c4b';let _src;

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
