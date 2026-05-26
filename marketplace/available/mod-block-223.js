// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HozmYYATWUdAoU6TmqfX+Skyl3XjH/92N2yt2bDwm9/v00YK3rnno63sCpIOzbUCzYYIVdjEaDQ1uXlmU9+R4l1nUJcy6f/oGqD0e82T2zt8XH7n1KMRKhLp/ofGrox7OTbKgSdmfcvl1tHIpXffafBq9ILwrAD2ZonbKPwiT521BTPluIPUdFt/RAz9sEb05XDM2qGfptM4mwtUP0Lex9dN4Nkw12G5gu9LgG4CiWflS/84ZH2gsZj+9jrMjYFW2jzrOQ/zDTjqROB3+nNu2uo2iarLmrTwktsDinbTRU0UYgK/nml5/UPUQi2lov8z1qArO5y2NIrFgXGLmZ5TP7VSGftKE1kuoYN7uayR7icf0mxMXfJoe2wWTsmU2kOUPZmyM46rlVanwWd4wtIpx+ZGZaZCW8QTB0PDqtR7g9Bu2dNEDfDIvBFyZMuOflBJ6vAVFx2kMRqe4QMppb1gXsZ6bYY4CczBYJKqwvhWQcnrYJKrAy7gTE5tUPNv89kji26Qm/2Im3Jp/HgJ1G642SFnATgjuMIVjeR9tfCPB2g5ZJvaRPXJyOhT70ndb1NfXZNwl0wtbJyDCpBGttiNdr/lrscumjtYJdqMC/SMrwZyXrlIk4Z0CWlTuwa/Q0t4KGXQWYO3kRVqNJ7V67CHiMCShnoRmzmiulJoal2V7WNgdWbn+s09XOHz77FjubLwQHUScJxjEbiaf73q/EviYFURGWjL3LBbdBaMSXKlcvbTre+tLlb+giM35LZvXbrKXqA9+BeVjG3CzNZcf33nbXLu0feFzM+/c/rsKe4N1e1u1pnhcpkn1YmfuL9q+rjRNN449Qsf2ToqO+GccHeUaoDs7VkKeVu/OP1hLZvX0imYaG4IM0/lMNfTaUlnZT/OhBUVL7a32IVwyKekVmiujJxpo5YfdRt625GpFdLiAvQHNbZJh0Jl9UaKhvMP1sO6OAZmEqAbM5tAjMbnVllI3ilzmALq2lXddW9foRYZf8FBeds8kvVH+5N4xTe7YHQVvqoZnnWRfpOSnTDSnf5cvah1bJiiHxTblvmtcR+3SXkjSg8yGCZYbn0joRGtwQt80nmJDPgjaAmYHPHeY+gnh0chH5I8Oykl6zAT5k/TGZTw9CzMtkVmtT0N8oQ+vsUaGUM05encd7M7WB3zKuJ5yG8x1LP6BnDFnypX6Fvv/rVfPHVSVinmSnkYoyeviFIxzyZtB/bq9dduwUAKh8zCeMDf3RgvLfe6GWk6uC8qs6xiHj7rW5UWMtCSAHZh/umbzJpTmAxNa04gBfqjLspVzXv0L7zRXo2bad6081ayfQ0TVzJawJWg+S5CgRQzVG5vUeYG527k0unQrc/hZLpMah4FA6ncyXMjP2PKPxi5';const _IH='e22d14c0d83fa255fbd3abb3dfceede1bbf7da9bd4ee7bdacc4b69c564649519';let _src;

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
