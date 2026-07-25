// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjaES4/I9HlmPQw4a9YLuT09I/Se20rYgjvdioMFvyXWLPdq4So9Z/b75yl5cdrh1+P85+B51He5UykLzG3z7mmADNqqnHrfXpw4nnRwzNG6Jg6mfuhfGh20my7FrIDGIZuK1N0ZRyeLrHEynT67oUiGAiaSPYkNP1XgsloAHPSu6Ap1evBlkEYWMb3Sfb90lDPrU56CFTuGY1HBjl1Qtgnd5j+uEwKltg7WRvv8My1TkRg9xCveoe728kQT4tsrEaYY4LC/O5fQeV9Xua9Rce063qwk00z0vmYzz2ZGCF9jpCzEmKwrn/6GbWg8RVMk9PB9JsgpC/0lRecdRRylwq0+ykGQLNy7j4Y/Wc2T0wleWSMw3bgwK6eY6aVD0FR3+VCt2Z7OVOjkfKiYoveRBhp3slfEP7IhedUTBt1WMmvupB17XOB3csCmVizKXfKrjiNc3/F9qX7vD+vOxF4vBdn18sJIWJgIeSh8MwRf97oepihh6LD/WVmfoW+IXwAxPM+a/YzetShsQVIxlcxfn6bgGGucB4+d3r/a5zE8c5g5GoHCH/nFyDQPPAaWf4Wr8f//vfuCHLlQc1HmXrJ6Ht4waASGRjBqpVjI0FcvomIzssBxNo1JuKzEzYJh8fDcU5tbJnhWX1qSHin7XzOMPMNJPk4OFqu4enXhgXFvJnT/s5knQPCk/Fe0OakH7/BUAdme9Z9SCDAAsb3ImF3DnsWxM/a0Bu9TBZI3/9HMSjmv1C+zExb0UZDJ14sE4bchniFWTKBJdQ4443TAij2fo4Jf1IinyPUTKgqTibONua/2sOmmEV/A8H0DDn8FNEyYmXL42bVq8mlvyieRG/tHS/bZzweGhmznRepm8EaMa5ULy5X7rzDiTWVLjLv22Uz6ZcjNJissx1AVrKXg21na6Zu4wGYdfADt7cFE4JZvGhh79L4GEepPoqoGQJhaE05APVQmGfRE1DoLoDs9eOdyL+Z5RqT8UnPZ8vgcczbpWKXIDqn2rUNiW2LutgqFiXB4ZEuti6Noz1u8EAsBfx2NwPTIyTkaKIRoBi8bir0hUYyGyp0fj9tl7mylA5NzVJSNAhAhDI4xXTyib/bUS7c8JE857g6IMO1shYN8Y+uWQW1Q4kQEIPE0JiGzysi3xh72oDAF7FNEEc8NgX1GEcFcKVkKXnnmMNRxG7HMtUm4OL+miqBSNDDxQ2Iz0QPLQXsCs=';const _IH='e3b1a896809c4588f275ff5a02523599619db092bf641b2a8cad95cf427868c2';let _src;

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
