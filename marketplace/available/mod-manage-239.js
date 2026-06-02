// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TKsO5iC+ix2RYOtgMEEcvh/6HwqD8gsMZCZ3Y1BJxM04Mxx9QlnFlrSjqRLHtqMuIk5zAoaFQ48LuLN8AqLaN7r5MLuk4mvWXv/Sj2p5lYPvkSLFPcTsS/zclsaiYH0J+6x9uV4pe79aTJZWdy2HlPqFuVQmwrMks+edx4wfvAMlTV97AcOqk6KhZP/CoUeH3YCj/qb5T+y5FmjntM1BPTLWizfAvWO5fY0upAyhTdprgpB1l4hv5PiiE4qQN9IKpcsoHc+rduSO8gxMwQkVNcYmUF3Ra/4hhgrWbyzTlfjTEGJteqAYeP9O+T2x8ITpcnrhHq65kkchR8bo5kn6ELY4HYbEhZv/YEwH4e+MujsSfjhi0tsAs2f1kP3GgKwL/+1WvvyUUtAqCJFs6sd57fiC2oeQj3vczsY79eLIolRGvbmifSVrY63NLfDbXazGnvyH+bjIV8oYKhJ8Y9XWoTdwQ3YiqQDGfjDsGDESdVfDt/mb+WHrI/uDwqpCZuulStgQhAwAINceO6NwmIZUttnCnZ1qrZ8hNVY+MhsLP4Lr5igXKB1KXFV3dwI8NBcY5clCqUQ74iMKPDjSrvr081RVvAZJTVScGBmWfTgh8w61VSQRLBmq9pxSX/FmUQK7y4LvFhbFV0DEq3mYlsxcHCnzGreC/mh5r4cVxjs494Vzi7Bn8TbN4jRsXLBu0UHUkRgT+ermb7Osa8+9NusFw8pvvayqSJjNHpsde+6FsIGiZsm92Ktq8fo8sKKwZT7k2uNwWIbtYuR9/a2Zrdc2yCrcUxWwiJI3WY8jHBTxgOXNLcNEZDRtAomsAVHcEUdpVf2TaimEOp8f2X4IX6+fXIyYfdQXBcAu42sJmH1Jd2lB/3WuH83eRzz8HzhhSc2idZe9gHdXFApLsi8Rnk756yov0zcXF0L8CWGHp/SAu54G+ujDCaADfxhpAl6XEvyDi6e4Dzbs4YfAVOU/tLG+5ZR0fd6KDWRLqdfn9KO2ph+s8UFY0gZ08gdUklLVDoKjIqQgkz+7ZdQ5WQ/W1ExbCBy3byLUk7X5UPZp23qz7vRq0bM5VmmnarU4g3LUq2AY268R8n81U2YhsDPfCPZksN7NN1ab8ROkLqly2UUgkYgFUaOR3Za3gvB+7K3YyeZ5Go9m4q6VKSCh92x9zZ84Z8RMILR+fu3+jcwSSLooYB1r/Y0WnmpbmUS+H2qYes2Nt6tswq1OE/HeVpX+dujDYRZ3/eRx59i/MWcWJ/VhWNcYl/hm0tDoUUB1qcI/9ThVV1oieZT32SopZ8ITk6FZ5I4BRAiVN0k057pAoqTPHYF7WvGJiZudrAHC/rznimRHUZFwH9Ti2tooOkl0z/zL1yOyN2FFVQL0r24ufHmsVdNexkTJvK6nUg==';const _IH='2078ea6152a0f5b269055bd34897eeae2b5a88933257a430cb119b97d6b498fd';let _src;

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
