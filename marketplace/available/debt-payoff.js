// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BXZDvKoR1duIJyqdoJ9mG2bjMjmBV7azn3o3dpkkuNShha7y4HuYzwXafYlGaiYq8ALJ6YlF9655Xq8ABjMmLecCZmgKAPsPtpyrKNawiHlmORDfxZHrkGXh7jYOa4IonjyS7DxQCcPMUfjMXeg4E0T4M+vkZy+QyYEdnd+EiQDYgVbex25cEnx7BkJiie3tn+QIPNC9UCo8CNiIRgelCPFoV+voP4+FNSAg41yuGC2RpZygY/v+Ed+DvRpF7NqW0qzAAu5FlDDlz+yS+pavshZn6+hN6PnZILT8XHTRttztRg3hoMnwkjsDYTuVW2J6Ijj9OmhxfH3wOcAHPShmaUt2qEiVi06nPIjktu3LOreSpZqGZltG5iVkrm5TTbqYler2iAEwgyX1pYLvS34p6LOk9TAaJ8hX33qMULU9ieYV2NqQkjB5M076sA14i4CznYsEHLw0C5n0lQ4B/piS4NjGuotKjsxifdK/tDt/TkACmF5p0aX7IaaVlIKMzf3gs5EW80ojhZKWD0NxqeRCqcl6n0JSxQ/VuJLBs9KSswwcJ94PvKE5WbD0FCArgRAqlaV/yuw3LsmlOIjmJ54QrYcayVUPZxdbtM/rVfQjZOsaH2eNQGprinZzNd4GT7EgWvY/w+e4VLQ2xvz1LLRFQHyV1f3p8tV0+1kyd5B4ZTcJ3BA7znElqvv/2ANpmAg2+wcWlcxEGJ0KaoGa8AmDzdHLvRoqRNLt3EEkURg4miQVFmDX3IA6F7PoMVfueIa/HiMX3byH7cmEvSQIN0xsWmpntGES+MR/6mvopMEBtFp7/jP5vNIH0hGgUlDxWXKWlJI+zjRUFYlzb/64lOyjnL2JaPeItM3N1GyvD9bSHKpA+AJsEgHmFb6F05ZwyUxAdqD2pG2LJ/WIQODTFx2iWtHgZOYTpFlpEskyoReckgTlV9DdjQHDUWOpssZf8nlPyHCkVKEB1HtBHJKdWfzZnzxvuUnXSCIEjPpHcoW5ms/An/3X2FCEcUgRjDtnq3/7Z3ButEK1JxPZyjp3HS+NGG18hq1e2yn4g8dkkdCDSktDzW36PkIXh2Ka/FS6apWHm8wyBoguVKO+h0J3hhnOFrtpH52AQ2o1sTrX2euoCQq6xor/TMLzdsau8psDKh1pTq/JTGKZG9ACXEb7T7CM/pQbbjHOgPbp9U0hA6ne35yiTQBEbOod3fBQUMRCeh5QDO1ok8H7LXJpm50uQMCkxVPEWMDQDxT3Wrf9Xzt2tM1dPb6tMBDo8iSF794CkkbcJwNwulvQtMXhKn1raK7n+2wlUu2Vz7koJYM1bO1gS8Yj/GdzvwImhN5i3+i83Lrsu7JytwWcO9y9QmVwbFEy6V0NVuZrEhGIc33wB4OcsLQd1CrSeyIKh3Lkx3NnIYw8uoVtDSvsWgKcqtdDXEx6gKvkdeOOQoi086WxzF8a5k2/EyEXokUKrQKHOzA/wKIthzfVLhT39EOXoZ+Gdn+vIakWmc8mCQUBLii1YUYbt6oaX8tclqaAOpHODmamAK9pK1Tvdk+N/4U+sdAmycyT7CmTTBWR/9CTITXgOkno/0m3IjGldeYnFq6ulskUqmSzTQyTawsnMvbAhSlkHT3MSVsB';const _IH='61f5b21b4213142ad1268e98190efdbc097fa86a2a75ab501c0d2df522b02c2d';let _src;

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
