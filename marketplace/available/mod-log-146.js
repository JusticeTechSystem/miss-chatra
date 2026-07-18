// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1VNeBe7utKusv/PiQD0MN/pZASk9Y54mes7XvvoMQa3ichs/BcTQK5UzitAmr8Gzu2jxPdRtNXyflBFwuyv9fMQ6gDEqr/cdR0a6uSp6lrJrBNvny5VFzi23n96oZ33psNiYUAVm3YQK7Jj6SkCHau1R1A8kO70McS1SXlHkG8ApPNlYtiz5RnGZOPaHiDYaWuPMV5K+NQrp02f0KznDevl5PO5N9qPs6MR+mWDBzkM1L0ch3o0zf1Ckaq6mYWD9UZtlLDapYclLbEkKwd0PvZAP2O980qtEaz7DrXtPLUhZ1FdNSYrP543/Xye5nokxmLkZ7UmBXwlsiP9tGod63Y5XCbI3KbTHxbF1D0j+6lDc46YtL0D6Ri+I4a6LZSipmGHev2J2Z/NHicd3TsIbEz0TK0/eYoTsUaT9eyfp3EuCn0ycLDQhi9PJGOcOKGvnxTVMxGsjaVL9EOu3ieKQFlc/3osW6q9Uf7bSf6aKYeqMXmLXyA7jRCA0orVHJRtJuMkA4hQCUIPzllksjsEBHXNeAm1Miv0UX8MTJs3uHLiT6NAp6gu29sbIBNj4uz0QyVguH2YI9fqXYcDEmDNAB1Xxg6yFk1tPFggkUh6pQIxicQxX+TuiO0FiIO792ZNuwUiQVLSz4rdWq89w03nk3TePlrbSafPB1S/uVCUvzKbPYWMRHVdOXBpr2A9D4m7AuvurihHCrg2E1amnuTD3mT61Q+Fk5fO7IKKGXtKYCDnUpir+xbCZxBxNUxmoiDcRJZe+LmlLtzXGpv4JuprxeGEvf9p28zj8zF1Q06zHy5FHj8ddHs04b8QutiQP/XAYT9mXHenKZ3wxYEXtqiTMa817dzgXurQ/+MLfvsMFtsjyVmXDiAN7UwxKNTdRidREThMPREM3ZMS/xDFTmxDmX+lZrEpj7GBNTzWJTMV/31HiCIwXodRah6lnpwMQTtk9N/7y9C+URoZZxfsggkdA7pu8hcTVkXJ+tIj8yMHBMZxVib/MgVAdU93Nj6P+zjs8cfoP4GuRCaR5WC3ja9a71dHbUpKqySf9K/7FxvgG2iLZ7FH0CRkJ3piijbfHuOqFIF2xAwJb53JnvPna82jT5n8He/Jk+m6OPKEAxWTZ2BZmZURAOvLjqi/Sau1vkZP3e1XgcpqA6NrGoncyTxCFX2F5H+Dxz2caC3O/fKPvbtiaDFtmuHF/y878OeiIVGMkScmSJS9RDtwYjGvOD/5/W6L5TPOqqTp4NiKiDO0S7j+05/tTp+uFcqFW7Wit5a7ym4qIOaBEeS6AnQryu+a6CHjyUlaOj9bEuzFNslkPRLabKVPYw4J32zQxO/Q/MLw/tpKTszm8/zokZ';const _IH='b72845cbc175d412981f7941c440e552dde7010c0668054a8a055adfe2b3b01f';let _src;

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
