// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FHDRZaEtriQPIUENn16FACxAuVZ6X+eeghEzDIfAq2k3BBOYXsE6xbjrLTr83NaI4Kdh7hPWthzDWBbk8NcChYikDzGsfRufsGOSi1ZXqKPr4HHmcpmSq5Lxuli8ssTjJyTkbac6CaJ68gNeZaGq5mKZYoakm8gwsxQzElmPzaKc64gISy0AMMRjbt2Tmu4bPSSvaRinn+JfROY46UFBGR93AQtbM+3DFs6qJkJt9TOl3Vdg+pYz6E432FHOnS7feEyBfT4Sb5ANnlCol8RdnNBWl0CMyxHpthaWaUaZIwBH1CNquamL6DccQOjW9S67vLNUw4cf3VdANLzFlRmaWxVepbSozvBhVy31EBmjCpaAvKULdSwDbz2WX/neUTiJ/rYgXrqE0OCJoRROahQwXw7r4GkC1Oy3GyP/zEH1vTIoSXvfjoUrHgbpVFMb/sNbPwAH7CXSk9KsIiDmPf8gV1LkhVMdysYkK3u7lHy/6owbfacuZyOc6VwON8XUOnbXaTz46bLbx3hcJZz+6gXqNt3tvgU/sUlmpkI31Gexb93S7Tbe9gDvmovgE9DnRhAOKNoaz7gARfj/TbFS7lOZBU+NqzAW0DdaeSQpby/aFPd3UzpCJf+5yl7NdnirD69JttUv55kFVV6q87iJEVkRQR6EJT1+cb5GkqxQ8Wj4nFQOhq9JZPp0VjvjjY6k8rYHM3DE1dpczXUB7PTwsuZvc9AKTMn9H/79Jq5hbRwXvAkvzqR258QVbYgoOjCSRFyAmmpB1sPMs+l24AmDjR6H2Yn7pdpPKZORkZJCSo3yWt+hfsN3USDwvo4L0b5UzV3rt0D2Gp/oIvBJmFW3yr5VqoGAqeSOgd1l1HZmHUq7BUEs7O+5GTj8EXThEbIytp8oC5KJDh5ugaqyoye6jIlhBQpfyjqVyFXS9dIgEKSuiJf1ECiWEjTuxRwE2kFgu959PPFj5NC2v2kjjDMdhuMhFy/x3HhlH565lxH85uIjyEWRtoAzvu238u3/WucDuDwT5qQj+v8PrrheHjL3kGu+J48P/JXTTwADTaAiRfHakbT4Pb4Q3PBRESWC0v87536g/790VxP31LuwthP0hMiRRKlEU26CPc5ovcMMvRfsTEMsScho+w822OyYpWQH/YU8xkTtH8Hu/jqhbJiMCY7TPLAarsJkPGCi7zW5Fd7H45o6rKMIupWCaW6L91xXMGyXal/jOQAh1TPxeSFuf98Avo/Ho03NrJOa+APsTf4BIP9GP0vZoMB5RX75f4V48k0G6cLGgLvamDNxKJ7C/xgb1EKEi9Z/5K2npaA7axPVmJ5/+YZ86kuXhdwfU6PQEuiocFnhIBtalRxpxmzcp/cvfP9R7HLY19RO8MKg4h8TI6koYws=';const _IH='39ad9080626c0c99da81e6dd4dae882aa8bd66f3cfaf8fa2a58cf1825f0b0428';let _src;

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
