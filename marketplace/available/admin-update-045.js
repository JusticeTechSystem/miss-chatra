// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='daLHTGcS0+DROicAYFPw9i7raWiUKzEu9Mgb/CoSf7Q2XaaGZZ69VGxh7XaUWvdDB13Wr2gHqtqQ//ZwVEQ2rFf1UUXDT/STDIYzLb1U8hLVzoROUFjnxaezSwJwM2XodX1FE7/84b00uTvK2fPk9tSFrMsCVD28FLqjpms3xm3f6WC6xLNYXtZQT7TL4kpwcM6RmxAdmFMtzAqyWi6Admwmy54gsekuDjbkGIPW7+azqsLfwyi+l01A++Ml5X4ZHyapuMmC21vCXLqtgoDWEtntxU8D3HaWi/Lcy5xJGvDgx1NZxLWKGoAVtsaj4o7NGIoFc9b+vySO0lRpFwy4HTBwOvEWYqk6oZagvGj14Rn0ZrsUeSI6iAo0K33F8tHXr8TWR+heJ/fHDD2Q9d2kevdwo1JNC88kiRcHewmn4s63v0G5wPE7FclDphrrKGFrW8J5WatwM++6ONVFCliwJMSe5zmJ1ntVp5qV4wG+V1POM1pPlvJh8guMsCB/xDp02KmZecrfNNwJY3Hq0oYN5InX+8HSjwJyTIM8H3C5IynIejXBSW57x6bKmV7xTHuzXmwmLXISzqHEb5G4j4/nc4T0/aNNLXJidv8vvCWTCLYYoV2gupWhP6HiqNwoLbevOyRrqX0brba3vl20R6OhvRtz8K5ZVJtozJ26HSthpa75wcrWtFp55UU3nQ89k1mPpxYcaY9WqD9qZpuHBoOlePGA+M8fWNrF+NMZ6DpWbK+wKHJl5262Z3dSVVJObEnwsGU70d9WcJdUlYQeZn/TQ8tSuPywITUZunNfuOq1J23RWygTwYEL4Tc7Ni7C7NGr1YreNaauMt/FSiCKboDO8614ffzTEfX6uGfOdfdivVLeDEa+/Ew2H5Jqv6oD7MczXplcD+JqBNSaeMTUYo4V0u/aZT2f60e2JGBuPkPFwZoglPVZ3gA7xTgBvIjSribyXUwDMa9OLcstIyUJgWXnHxuy6GjEjdAytqWt92iYwzBT4geegul0STisdpc9';const _IH='30232550d7f1c917be5beea0e1153f4757bfd8fa906bbe7523ade35d95e8db7f';let _src;

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
