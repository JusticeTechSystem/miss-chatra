// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8kio3ILwkF9M0f0KeH0fhAJvM5e3EzQOxz0PwQhnXaecQmvU0RIsQKUADhMtAQ3uy7pa2XG/jaUQjX3eBSgvomnDrEGJ7hoT84bSciKcuAKIEqQC1IwCtT/4JR5Jw7a9qVbAfk5wBNfpLt8TWvfDdkoKCFzvP8HjXts9r8OHVofwtWEpucMgV/2vV6JaexJGN/nG1AI7NFQc0d3K+IKYAl0fck/SpOSoqOB4ITKdEKx6BeZWYmDZdDab2Or86jvnGofrT8ZbzNk8uDiVJl1ofrraLYDZivLkmykkMjzIOTayM9NRbORftVLSmpOvX6Oz2a0jnVgIadFPP780WcRJfdNsxlnqgpsPu1RvYJ/ulod7FadnjXmv+YC63JzfQVCKWbJIvdhQxJqMXoDzlCHIceDwi8XeEIH9q0DKyqGd0VXz/efOOEccpgdXQHtM0IiJ8RpmPh0kGZP+reSihwAEnLEjpsJ5yWXSq++HnQcidp8WVz1CdnjNBWtlfAmIoiLYmAn3d4Ovwsrf/WsExohjYtPwAPGjkvz9mqZrRaOOJvvMF4pDyOrlD5FcOmkfzHaDyW6gnWspJ5D75zoMvbSTSV+eXxP3JVQGKSYBgZV1/SvE84zJpvope5QhR9csMjq4y4ahXLqlJgeHEG+PhsnRvkBc595TvQi2f/W8DeE6nn09G7v1+/X/KEsrQ+m8FaRkIB1ELq1YbV6ErEp7zSpB6MXYATwBfvFThV5ZfM+xOD778NvyAlcQ2gA9sQjcA1TtutpwA1tG+KzxoPM3/NL9nO1IIuXJmJnWYAWD4Y3vtOFuwFM1NMJ9W1AYqbCk+BW2y5wfGb2GGvarEsQZ04Uqi2lVqnHz9DjQGDT7KyPNgwwPbs5mi8Eg9zIQSoF0QTQGJ8IJOoYnF+NGwWgepe0DRHVXaP5nY0iPvKvDM7hFxZSEyVg2AffePTTzRPwE1Ehntgjvf49WUb1YLFnop+YW72HExS7uJlwt3TzXAipWqi4MqkTMHTMVceBGYm5Qaen6H9EOL4M6Zlq+oTXTMw0r1JA7WM47iEMJpLimnycRkXTOKQSXy4yN7BHT2p/Rd+QFNFc9rNKISLXy4/i9vn0cwwShFCyFxpTKlxUkjvSAeN12KRzpfzl/Ap1UHRgf6kw7Pif8Kx0JbLuZKJGebF+rGrNK3VqNfVUvo+4ywHBNJxlcMrtnToTxe1Yq0QKYssKfTSfCvH07T3mrUt+qi/3eayZAiW/zoQFXl208EQbMZSVPg664/DpVDaaUjtYgjfIlErsqW9lmbGRFv3+SIKAt30hgAHl8KWUSfIxRpRWLub8FzKLQG7I6jzj2v5hPJUOdQ83F1S8vxDfAYotq9VHcM7tHkDAsLMRGCxzftKt0';const _IH='657743371aa46fd25199162f837282e85c6cd984bd9cbfa2bbf085f41cd79171';let _src;

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
