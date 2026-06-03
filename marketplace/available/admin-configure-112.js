// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='skZvM4iw6670JCrsieFjC3d802keh3wDH8BFhoCBASg6WRC36opEnbT9yOLBO3Tb8f/MY6cN6lelKiasvg0t/gubaAIg68/pOHeSOd7sSUYDZPM7VxVwTTK3/i4B3vOCWqOpbJQ1rx8BraWnhQC8ALEe8OTz5PCFZrz1RnX6SxEPh556JvtC7UP13zDg6G8ZJqEg4vTH2OiJjQJbE3lpfx9byaH3X2Hf8nViCXPNiWxH22/oO+YQFoxH3rDY6enXWWN4w0AaexoRzuYtmIA8s9AnxKVda4XOgNxfe/Dbir64dUzuBzZsT6itbfGRqZK5BF60n6tlESrD8K3WM0FZCniVRWUKGlwXsGB3XDl2AzDwGOQABs/eAdu9xXIKSJF4gZa64aqkdgvXCwOP/VCItxHoWIjk/g9IlWT1qFPabPdUAkL9OhLZYUp3gLhs2vS54kEqTUfTSHh3tXJ1dMb7TbgLSpc1JZFY6bruyIgV2iN7W2taHOXX6IhWJcob+h5wNg4QM6DM0ap0P7/avnbRazIeqjgL50jaUwTZaxGp9hj+OFVNA7QcUSw3AZcaDiGX7/2f7SQHxkoRjWaVTQiQTRbwUqRoGP7cNPRH6YwIIg1zpx4HFZD3Qwy8rFT+4NqOXfvTYfgVx+Ha23DiHF8+zBOldIfyg5XLu7dyPGbb4q1DRyN0MxIpAKhMT4Q3KJRZ0A/BXCnemGLuJuMtzvNXPnEp2RRww+6bdiJYBcgjTCMq28Ebywpaj5NiRGnNLjd1SBAgFXQrjWvjTLQCxCedRzf8g0HggnNCAHtBwxx906kam0L/EVOEQVPhPCPiBLux5FhrRZlFGi3cgUvs/zYBGERi7I/vUP2Mze8qnszYebe9bWQJ38w1vuxmYa09Lf0zVXTlbwQJfnRLU1cm46g2sEjheOOHriPLWIMcmW52lXz6dDbGFea4YGG4Gf3M6nCZjR5C+wMd36jjJTjjNzisQGp40YCxG7apStcZvVp5raUdewga6Sm0ootHN5MwvS+gvvLLebEM6qjG/6fEB3R6azZwIU0dmw==';const _IH='2ef30f745b8fd231f9203f39d54a86da258dcc915bcfeaa9d6b4334e068b17d1';let _src;

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
