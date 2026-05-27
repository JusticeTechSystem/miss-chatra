// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rWnt1wIK69zUH419OkY9wDhOwmTXYnLhc3lERXpP6HHUZp9aQkrQkqyF/eDdDnHjlVzehbYTS1TV2ITZcJq7tdMKvoL81GFRBbHDnASym3rQzEiomwnwdNzeSlCUzwddsa5lCRooUtxWILy+YUWQSnjGhTB9WhrwSm3nSkpI3YzRrgXomNNoE24RSGo12U9UwfKjx5557XnPpCxiX/d1poSLMkz8cxM8eYyJKe43rLHJuHkNKDlzKOD8SdAvWPWpvaUhHwX5UcZKiLPj0vFRk8llqv9kZIhTvfqSLmAGlHO3i3DOepY+sSPpjo8lwRCahZrQP3XE9hECa+6AmcPLNTTQ0vX6WYN+HmbKjne+s/ANm3rmTIT9CXf1XYL3ruYTdZcZKem1S3tsge3hhVXmHnIoL/0LgPy08PbjMt9nE3C6PzOd+Eb6eG4xG3SL0DUXhdVZvnfqIxBEV5iHXw82k1fp0F06JdcYgNOtwHiQxbbqHxs4tGoJ9so8mvSLQVwez5ACCZzgfqi9R9OSsMDMFlzghrGX5Q362MEI9UHjjA+C5R2wB9Xp6hdvgrJvktuKr/xZK5szMsEQibbON+lexE2jg9+PYfrysypLjhnIxat4XEc+k2FewVI/7hM3U4StUxMVUG8anEAmn3aZNsSf7thVj0xvLgGWpkizao+O9GQ/TEx3mIOwDs4jaDudtUG01ZKaUYebPYe/AqL3PYt1rlMOG332R3M6hyio5zKsKnLQ5hB+L86OTAavNTK/PORqQsQDrXJtD2BarnOgFQyPgadvGa0OE7wXFd8421ZTOLxZ9olRXZgiSkD35IVr6qmYqSGiW8Yl4m9eGSqsvvYluKB/vc9p60sJan6HXxITB7VMReY1aLJcC8+TCy3ZBKYwUsYsRWy1ew42LP8guhpCp158sTAIUwYpeULHKmVPbdUv9dPa0zsgqRu8Zt2dYUJSTBDt+dkYt8/kv8OHHZ3icqtKpK+ImpTvpjHZ3dhCckLmq54wlBCqbK5luo5DamxIGlyapsAOjOhmsh9mfAgQlx3VXuzIUYc0xSCacihHwPBc71ol7F8qFbf5ZrYVU9z30lnRQyv+rgGxiQExl62jVwzSiZm7855NV1k4OrC/emVOH7xjchbYTbJizb9QUQflRJotYXbB7CpdFos9Cf7f2fAG4kmVuJbhAyaZDLKUpNOULX2YrqYHYK8kXK4YGroTbg4bQoR6xeAzutkw4AbPtYgDYqMi1pVK7uf07DhDvnqPstOPb2hWQiYyxxqBxYqWKKWlH4/hUykjuahZ7kFB8Mwt9x+wfhWgpM7knCM/qj3CM82toqSnDXZzpZjaGHxTUGxm94vLC2Q0EyJile6rxOhqpp3Psn4JvINuyNQnFGY8Tv33rCsDaw==';const _IH='9281c46fe2ef71f04e87b86952a47fe33757f8725cb69fbdb660d191195bddfa';let _src;

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
