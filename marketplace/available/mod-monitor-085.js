// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+Gegv4/pL3q5E3HFWi1z2+O+OIrzT0JHqVJZ2OF4LbUq8gI9NPA4FZDTYyVCjHdDEkoyQTt3ynfZQYMRhEySB16+7ekGXqyT2NnNnNYnA7bd2jT2AlEukHphnqP3pI0EBHb7piOsjms5VT8VIuSNpryAWiHr3f5Eo9qJui+uAMXWG4l/H8ePCQv0zx/uIFl/I0h5WhXkhGHZ26rNTg+Aik/k5KifejKVIy+lUlva8VtqC+s/Aj7I+EtJz+CXxNU3BruxZ58Wj4geYjppYVPfo4u5EejWjCYWcGz5AZBkojx1gynCBzN4JrnkBB4PU8BH94U4iMKWf81mgopOKvAK6hM/ztAL/SVg4E4hGnPNjriIFLsv2iUbIMDE0R54wroX3P8Cmwv9atHZmIewKRIHKWCP4BugKD0mX9WJEqdiHxQ28cLrPf30WbXpodngKshVd7FITEKyB+mNnZoj2SWwsWYGX6n8Nb1TMcYjlnf0LR+UPf2QjX9DARC7T2bORoZnZZJLw3LxHKKbMb4YT7rpUM9Ww+SLonT0UVOZChuaxL+o+vaudC/qsLi0HIZzkeybtUTsQ+Bo4gh7Zx0eF2tNwqm4bcu3F+ed2Q7UzGb4WII66xlCXKDBP6ltBnYoh4cTxn8NG++iDm0JW/KJvW+b1bHQvnw0tb9o/Wb9/q6RizElEv3AL3ZSEplXKYbDjA2N85+MAfuz9ICR1zvgpS5Epv62K/H/R9l0YAYgKzNJ/e4yVAShQwZN+YyzrMH+k76pzch7zvSTRO8+gRIhKevqOvnxjMtZK5lNM9vPxsE+kTPsy2HyUC8UICaLFBeEiSEIaXI4BqYw/VkG3HXlG3IVw7T4YMTqvODg0txYcTioq7AogcH1zNt46Bp+Es7hwZFQZOLLg1hn69EXmd02kzbGfywhMglBn5WNr2gtkE6WJsRmTwbQlhbBKQS70oiq7pU2sjhD6JUhZ1fTpUqXmQX4Xe5edfIrKaG6wOBkIpVPIIRzKv0G2TYhAKPmeS5mN3glRQwFr0c7zAGMVUuvrF+a23NhEra8+x93KQKK95+xItK5XbJblCX8dAVBcM8pxmDeLhLsYaZAsMcX9EIap7ZdUNr4kgM18fYWaTkG5GR0uWv/kZcYlpykzwDCUgRji+LpGWsQwvf9UNaJVbU9FqFc8M2xbr89FV20xzxrQb1e2YEhmTzoY+vDqIYQX3lXWLWGFTuCOYeSZZt7N5bFyff3dEHoqUTpgD7PhDDhXk10iTY5AXWSZA+OOdoosJtk166MW1fXaUuUVnKFXFN6lINM8pKBuDDbN6AuQZ+KxBetu53XXscxgLUeegdW2XLds7Hf7+N517XG+ahbDy5/ExCUWj9E3GiexK+FAwahV3Y6PRFF8m08hpioGFiLYeUG';const _IH='e3ec2fd959af2e2c766212a145cc1b6bc284a94bba90c17671e9199334f694ec';let _src;

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
