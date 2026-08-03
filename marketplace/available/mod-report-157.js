// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOnntcR3D/jS4PohZndfNq6nz1a3kbMOczGkmQh3h8nmQyp09yj7TT7vc9QeO+K/r/l/nT8lOLVMyRBtsnkAyEw9zpBJfHk5SObT131ZIoin0W56dHrCngXZ9INbp0NJ/x78aFgKL+QfJ7XDZt33RUtvW9xeSYQQpHdJjkJ4ws8U41WmR9V8GFfp1hQKEmirhmcftwba7whlSPJuY7RTT0drj/g4sLw2sM5Anxtzfy+ttnmEY+4pVes4PnOd1+EQByxHwF7oXP0hevDRv+9I2CS2V8MTWqRnG7IZnbWppi1BqUKckiLR23rwwbECLuHrJfCp5nlHYRszs2bB+9gPlLm+oNS+ZMzeYWGOwCciKtjHQNWH0rdbn48bG7hUkAgwe9cNP98ihv225cTLZxjq5MZML+XNh/VzQhwneBHKtNLFmx6pO0tUf9HwQxx2fpepitavPBvAztbiEcI7Yi0dcy6YGjnR3DpzN7KJDZ+nIb4ZF/MWk7bMkXGaCb6tNkqp3DuQgXf+0YMhcA/+qMl8cvOLNJ452WZF8E+R4t8g5EbYz+VR/fCzXwar9LVpf4lC2VXOx4ABPRQJqgpVOokkUEH+dYJvA8NhLeCGRPaelKVnkjSereCsKu09DZPXMEmxoUg02uzX2lCnYHqlqmO0B/LW4rZNmzdeC102r3fvb4qjzQEofdpgCq/N2b7d/VtnGhrhwyxbEqryftiNJW/NJz1WBNi3P6l1vLHVENwbQOtKWj/bhChxUQj0cr9xVSbc14SY+qVjrEPDULsvCc/nx4mg2LO9CCBMqEEI4Ea8tWoZoLvHFgoZkgXUDDfNakUCpWrWkyfKZfLPf4COsB9KmbgPcq1oumX+gkXDqfZLKxZu7tf6uqzjPho5aBCyPaHKWL6LgBjk4VnCYe9cIpo81+TJM7k2cDPXeqBb85Ouz6ke30wRH1C6vbvIhoDY3qqJ+ZLvA9S2XiWtmviv9TxHbbWh4dFDakvx12JUxOrFvfX9GuagEPHTiYgsKVhjcbAtyfLLNXKX31AqSoX9P4vOG8PNSXZjdZscoxpq0RZaZB3nvewHoMZnjPokCWthLxM/qBp6H9b7EQGez2KKP5KmGdqCsHz18NAQlXhQ9M84xYLujOCkUOo9d5KHjHD74QO2pNmP/dNfmDZaC43LIF2WdPDThyeXIp/rEXQYHt1vJ05n76++dNIc+2cB39wXwr0jBD0R7K2xCMV+aO5H8I1+4p52UFB1pD3tZ+nGqrftOpt6Kxqh+ctthHdkHbPBJgkBFyyLE1rS39GfT6G+SJlq+AtWyNHbVfbzThRBb/ycKaPFzdP0WVECN1a6TAJfiO9dZDmEjwHgy2l9A/73iql0U4LFmbCo8Fnj9zD1NyA5xlMWBeMEfF';const _IH='9aca779bd07c2d625cb8f65ae250fd457ae66a3a79713339f64af9310be71aad';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
