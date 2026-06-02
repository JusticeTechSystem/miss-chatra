// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='usJ9TcU7W4lJEep6jsuC1bBRqxwjSVytEeOA8OEja8iWm2CzwT8FWf/PgBWl5kg338eriZjDEnJ2qSUEfsbWRENpIxnT8OI05z8K8wV9JnanG5YtMNNaPqUY1XomCYWiERX0mgDAkNu/IFKMrxN+vrWbIZjo8MhL7jVnQrrFAEqo79xmCUHOu0AcRYZQ6kiIRN1JeHzVXu3Q0ms7koyPNmr5CEmNElii8Bz/IanOUhDqwJubyTdvtncVYE3U77xSDQyKPcZ+s0R5bltexJ21NUy5FktB5mx0wugVS9JlNS3ng1z/44KxpHYGX+2WT/cvKLrGVq/SgG9pfzc6FTt1W9/FHWElXwyQ3DFGTF+/64Aa9H+yGvRi0EfCUykWb52GTWiMVpXUWKNwy6X+q9yIB8qD91gJJrkDnZL/u+9biT4UsbH9fFVoiHMLRToM/pawr6tq86wOUs+tDr5oAQ/8oGvshJrYiR/t96SvwHJao4pq5C6InfCXh8BHjSDVS7ecqc0GrHekhtryNJeUza6IQ6wqI9RSVpwzuBu8/7nKI/ShLIZFXG23URo5rKNn4fHZAgAV08TnLpErjXUxb70XtehMzQ07edEH2qsmJkH6uemE5laeU5gSrIIViVqPk6TiFIsSaRTylo/OIOKHJODwtJeh1dphWItBoNyKxk1YXFtLQBkJZBszuQP+6J9hkT4axrNx4VBkGKuUqhNq9u0hBqMhX1TB8iP+1rNBPE7zuqBsud4CL5ffk3/icmL9WU6mZO6YEV/yje2G8sjXna7Q+8OnFSpIEQmCLhl7gyiLjgD3ej6VWftmq7Fuw0iLQJhQAwhEqftbdtuYEJR7iAEqP1uSDE12CqisgrUAgXoyZpL9ESKR3sM37QuskJ4JmBdqw9Yspwv2lbCM2rA9b2KU/fU/BzGcFElemHcjJ076uejWNDSFMKYhIwdae3SN09146+iox/gNISCj5UfGRFs1RCdalIAjRXjiLLY9wqGda34ksqYf6Yy8sxM16CGCEeLcm1RKgCsKDMbvri/AA/mAV9LOYaXdD+msDUhPJqDPt6W/SwLE7PNHbA/EXjQrlOjhoQc0mderilJwBfDC0pR1IwAnAl4T+/u8eBZgrg4wS0QeeYmlhlAnNpoGrCcOm0T//rjIcoenseq93BDC8YW9j+t5buuKeCLM1mDiSohQNDDYn2hnYzmu8Mavb05pjipUUOepjRcF6sq9aLxAb/OsuKm+';const _IH='b32720ec082e97b0950c4f16bc71fbfa65cb78180269da1790a4be733b418fc8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
